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
import History from './History';
import Radar from './Radar';

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
    const [HistoryData, setHistoryData] = React.useState([]);

    React.useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        const getCountryFromIP = async () => {
            try {
                const response = await axios.get('https://ipinfo.io/json?token=c68192fd24aa17');

                setLocation(response.data.loc)


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

                // Include the "content" parameter in the API request
                axios
                    .get(`https://rss.app/feeds/v1.1/tCTQCmRRRkvlqXWX.json`)
                    .then((response) => {
                        const articles = response.data.items;
                        setNewsData(articles);
                    })
                    .catch((error) => {
                        console.error('Error fetching news:', error);
                    });
            };

            fetchNewsData();



            const fetchHistoryData = async (date) => {
                // const API_KEY = '87a7f6cf7ac6474b8fb134942231309';
                try {
                    const formattedDate = date.toISOString().split('T')[0];
                    const response = await AxiosInstance.get('/history.json', {
                        params: {
                            q: region,
                            dt: formattedDate,
                        },
                    });

                    return response.data;



                } catch (error) {
                    console.error('Error fetching historical weather data:', error);
                    return null;
                }
            };

            // Get the current date
            const currentDate = new Date();

            // Generate an array of the last 7 days' dates (excluding today)
            const last7Days = [];
            for (let i = 1; i <= 7; i++) {
                const date = new Date(currentDate);
                date.setDate(currentDate.getDate() - i);
                last7Days.push(date);
            }

            // Fetch weather data for each date in parallel
            Promise.all(last7Days.map(fetchHistoryData))
                .then((data) => {
                    // Filter out null responses (failed requests)
                    const validData = data.filter((item) => item !== null);
                    setHistoryData(validData);
                })
                .catch((error) => {
                    console.error('Error fetching historical weather data:', error);
                });


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

    const handleSearchClick = () => {
        setSearchValue(searchQuery)

    };
    // console.log(region)
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
                <Tab eventKey="today" title="Today" >
                    <Today currentWeather={currentWeather} />
                </Tab>
                <Tab eventKey="Hourly" title="Hourly">
                    <Hourly hourlyData={hourlyData} astro={astro} />

                </Tab>
                <Tab eventKey="days" title="3 Days">
                    <Days weatherData={tenDaysWeather} />
                </Tab>
                <Tab eventKey="history" title="History" >
                    <History HistoryData={HistoryData} />
                </Tab>
                <Tab eventKey="news" title="News" >
                    <News newsData={newsData} />

                </Tab>
                <Tab eventKey="radar" title="Radar" >
                    <Radar currentWeather={currentWeather} />
                </Tab>
            </Tabs>
        </>
    )
}

export default Header