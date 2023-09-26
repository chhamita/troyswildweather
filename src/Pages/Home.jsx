import * as React from 'react'
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import '../assets/scss/style.scss'
import { AxiosInstance } from '../Utils'
import axios from 'axios';
import Hourly from '../Components/Hourly';
import Days from '../Components/Days';

function Home() {
    const [currentWeather, setCurrentWeather] = React.useState(null);
    const [tenDaysWeather, setTenDaysWeather] = React.useState(null);
    const [hourlyData, setHourlyData] = React.useState(null);
    const [region, setRegion] = React.useState();
    const [astro, setAstro] = React.useState(null);

    React.useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        const getCountryFromIP = async () => {
            try {
                const response = await axios.get('https://ipinfo.io/json?token=c68192fd24aa17');
                setRegion(response.data.region)
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

        }
    }, [region]);


    console.log('Current Weather', currentWeather);
    console.log('Ten days Weather', tenDaysWeather);
    console.log('Hourly Weather', hourlyData);



    return (
        <>
            {/* <Hourly hourlyData={hourlyData} astro={astro} /> */}
            {/* <Days weatherData={tenDaysWeather}/> */}

            {/* <Container className=''>
                <Row className='mt-4 mb-4'>
                    <Col className='bg-light p-3'>
                        <span className='d-flex'>
                            <img src='../img/sun.svg' className='w-25'></img>
                            <span className='p-2'>
                                <span className='fw-bold'>TODAY</span><br></br>
                                <span className='fw-bold'>TUE 09/19</span><br></br>
                                <p className='fw-normal'>HIGH 92 F</p>
                            </span>
                        </span>
                        <p>Partly cloudy. Hazy. High 92F. Winds light and variable.</p>

                    </Col>
                    <Col className='bg-color-gray p-3'>
                        <span className='d-flex'>
                            <img src='../img/moon.svg' className='w-25'></img>
                            <span className='p-2'>
                                <span className='fw-bold'>TONIGHT</span><br></br>
                                <span className='fw-bold'>TUE 09/19</span><br></br>
                                <span className='fw-normal'>Low 80 F</span>

                            </span>
                        </span>
                        <p>A few clouds. Hazy. Low near 80F. Winds light and variable.</p>
                    </Col>
                    <Col className='bg-light p-3'>
                        <span className='d-flex'>
                            <img src='../img/sun.svg' className='w-25'></img>
                            <span className='p-2'>
                                <span className='fw-bold'>TOMORROW</span><br></br>
                                <span className='fw-bold'>TUE 09/20</span><br></br>
                                <span className='fw-normal'>HIGH 92 F</span>
                            </span>
                        </span>
                        <p>Sunshine and clouds mixed. Hazy. High 92F. Winds light and variable.</p>
                    </Col>
                </Row>

                <Row className=''>
                    <Col className='bg-light p-3 mr-4' md={{ span: 6, offset: 0 }}>
                        <div className=''>
                            <p className='fw-bold '>Astro</p>
                            <Row>
                                <Col>
                                    <span>Sunrise</span><br></br>
                                    <span>Sunset</span><br></br>
                                    <span>Moonrise </span><br></br>
                                    <span>Moonset</span><br></br>
                                    <span>Moon Phase</span><br></br>
                                    <span>Moon Illumination </span>
                                </Col>
                                <Col>
                                    <span>06:24 AM</span><br></br>
                                    <span>05:48 PM</span><br></br>
                                    <span>10:45 AM</span><br></br>
                                    <span>08:56 PM</span><br></br>
                                    <span>Waxing Crescent</span><br></br>
                                    <span>18</span>
                                </Col>
                            </Row>

                        </div>
                    </Col>
                    <Col className='bg-light p-3 ml-4'>
                        <div className=''>
                            <p className='fw-bold '>Forecastday</p>
                            <Row>
                                <Col>
                                    <span>Max Temp C</span><br></br>
                                    <span>Max Temp F</span><br></br>
                                    <span>Min Temp C</span><br></br>
                                    <span>Min Temp F</span><br></br>
                                    <span>Avg Temp CE</span><br></br>
                                    <span>Avg Temp F</span>
                                </Col>
                                <Col>
                                    <span>33.8</span><br></br>
                                    <span>92.9</span><br></br>
                                    <span>23.1</span><br></br>
                                    <span>73.6</span><br></br>
                                    <span>28.1</span><br></br>
                                    <span>82.5</span>
                                </Col>
                            </Row>

                        </div>
                    </Col>

                </Row>
                <Row className=''>
                    <h2>Todays Forecast for Teen Murti Marg Area, Delhi</h2>
                </Row>


            </Container> */}


        </>
    )
}

export default Home





