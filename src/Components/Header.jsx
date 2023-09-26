import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { AxiosInstance } from '../Utils'
import axios from 'axios';
import Hourly from './Hourly';
import Days from './Days';
import Today from './Today';
import News from './News';

function Header() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [currentWeather, setCurrentWeather] = React.useState(null);
    const [tenDaysWeather, setTenDaysWeather] = React.useState(null);
    const [hourlyData, setHourlyData] = React.useState(null);
    const [region, setRegion] = React.useState();
    const [astro, setAstro] = React.useState(null);
    const [searchValue, setSearchValue] = React.useState();
    const [location, setLocation] = React.useState();
    const [newsData, setNewsData] = React.useState([]);

    React.useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        const getCountryFromIP = async () => {
            try {
                const response = await axios.get('https://ipinfo.io/json?token=c68192fd24aa17');

                setLocation(response.data.region)


            } catch (error) {
                console.error('Error fetching geolocation data:', error);
                return null;
            }
        };
        getCountryFromIP()
        if (region) {
            const fetchWeatherCurrent = async () => {
                try {
                    const response = await AxiosInstance.get("/current.json", {
                        params: {
                            q: region,
                        },
                    });
                    setCurrentWeather(response.data);

                } catch (error) {
                    console.error("Error fetching weather data:", error);
                }
            }
            fetchWeatherCurrent();

            const fetchTenDaysWeather = async () => {
                try {
                    const response = await AxiosInstance.get('/forecast.json', {
                        params: {
                            q: region,
                            days: '10',
                            aqi: 'yes',
                            alerts: 'yes',
                        },
                    });

                    setTenDaysWeather(response.data);



                } catch (error) {
                    console.error('Error fetching weather data:', error);
                } finally {
                    //setLoading(false);
                }
            };
            fetchTenDaysWeather();

            const fetchHourlyData = async () => {
                try {
                    const response = await AxiosInstance.get('/forecast.json', {
                        params: {
                            q: region,
                            dt: formattedDate,
                            days: '1',
                            aqi: 'yes',
                            alerts: 'yes',
                        },
                    });
                    const extractedHourlyData = response.data?.forecast?.forecastday?.[0]?.hour || [];
                    setHourlyData(extractedHourlyData);
                    const astroData = response.data?.forecast?.forecastday?.[0]?.astro || null;
                    setAstro(astroData);
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                } finally {
                    // setLoading(false);
                }
            };
            fetchHourlyData()


            const fetchNewsData = () => {
                // Fetch news data
                const apiKey = '7a5ef014b6e5fc32bcf3a759280c7e08';
                const country = 'IN'; // Replace with the desired country code
                const keywords = 'weather OR climate';
                const encodedKeywords = encodeURIComponent(keywords);

                axios
                    .get(`https://gnews.io/api/v4/top-headlines?country=${country}&q=${encodedKeywords}&token=${apiKey}`)
                    .then((response) => {
                        const articles = response.data.articles;
                        setNewsData(articles);
                    })
                    .catch((error) => {
                        console.error('Error fetching news:', error);
                    });
            };
            fetchNewsData()
        }


    }, [region]);
    // Event handler for handling user input in the search field
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };
    React.useEffect(() => {
        if (searchValue) {
            setRegion(searchValue);
        } else {
            setRegion(location)
        }
    }, [searchValue, location])
    // Event handler for handling the search button click
    const handleSearchClick = () => {
        setSearchValue(searchQuery)
        // Store the search query in local storage
        // localStorage.setItem('searchLocation', searchQuery);
    };
    console.log(region)
    return (
        <>
            <div className='bg-gradient-header text-white'>
                <Container className=''>
                    <Row>
                        <Col>
                            <div className="">
                                <img className='img-fluid' src="img/FullLogo_NoBuffer.jpg" />
                                {/* <h3 className='p-4'>Troys Wild Weather</h3> */}
                            </div>
                        </Col>
                        <Col className='bg-gradient-header text-white'>

                        </Col>
                        <Col> <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search Location"
                                        className="mr-sm-2 mt-4"
                                        value={searchQuery}
                                        onChange={handleSearchInputChange}
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button className='mt-4' type="button" onClick={handleSearchClick}>Search</Button>
                                </Col>
                            </Row>
                        </Form></Col>
                    </Row>
                </Container>
            </div>
            <Tabs
                defaultActiveKey="today"
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="today" title="Today">
                    <Today />
                </Tab>
                <Tab eventKey="Hourly" title="Hourly">
                    <Hourly hourlyData={hourlyData} astro={astro} />

                </Tab>
                <Tab eventKey="days" title="10 Days">
                    <Days weatherData={tenDaysWeather} />
                </Tab>
                <Tab eventKey="history" title="History" >

                </Tab>
                <Tab eventKey="news" title="News" >
                    <News newsData={newsData}/>

                </Tab>
                <Tab eventKey="radar" title="Radar" >

                </Tab>
            </Tabs>
        </>
    )
}

export default Header