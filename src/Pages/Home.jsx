import * as React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/scss/style.scss'
import { AxiosInstance } from '../Utils'

function Home() {
    const [weatherData, setWeatherData] = React.useState(null);

    React.useEffect(() => {
        async function fetchWeatherData() {
            try {
                const response = await AxiosInstance.get("/future.json", {
                    params: {
                        q: "India",
                        dt: "2023-10-19",
                    },
                });
                // Assuming the response contains the weather data you need
                setWeatherData(response.data);
                
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }

        // Call the fetchWeatherData function when the component mounts
        fetchWeatherData();
    }, []);
    console.log('weatherData',weatherData);
    console.log('data');
   
    return (
        <>
            <Container className=''>
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


            </Container>

          
        </>
    )
}

export default Home