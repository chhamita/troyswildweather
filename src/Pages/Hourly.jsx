import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import { AxiosInstance } from '../Utils'

function Hourly() {
    const [weatherData, setWeatherData] = React.useState();
    const [hourlyData, setHourlyData] = React.useState();
    const [astro, setAstro] = React.useState();



    React.useEffect(() => {
        async function fetchWeatherData() {
            try {
                const response = await AxiosInstance.get("/forecast.json", {
                    params: {
                        q: "India",
                        dt: "2023-9-21",
                        days: "1",
                        aqi: "yes",
                        alerts: "yes"
                    },
                });
                // Assuming the response contains the weather data you need
                setWeatherData(response.data);
                const extractedHourlyData = (response.data.forecast.forecastday[0] && response.data.forecast.forecastday[0].hour) || [];
                const astroData = (response.data.forecast.forecastday[0] && response.data.forecast.forecastday[0].astro) || [];

                // Set hourlyData in state
                setHourlyData(extractedHourlyData);
                setAstro(astroData)

            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }
        fetchWeatherData();
    }, []);
    console.log('weatherData', weatherData);
    console.log('astro', astro);

    const [countryName, setCountryName] = React.useState('');

    React.useEffect(() => {
      // Fetch IP geolocation data
      AxiosInstance.get('https://ipinfo.io/json').then((response) => {
        // Extract the country name from the response
        const data = response.data;
        const extractedCountryName = data.country || 'Unknown';
        setCountryName(extractedCountryName);
      }).catch((error) => {
        console.error('Error fetching IP geolocation data:', error);
      });
    }, []);
    console.log('countryName', countryName);
    return (

        <Container className='mt-4'>

            {/* <Carousel data-bs-theme="dark" slide={false}>
                <Carousel.Item>
                    <h4 className="text-center m-3">Hourly Forecast for Today, Friday 09/20</h4>
                    <Row className='mt-6 mb-6'>
                        <Col>
                            <span className='d-flex'>
                                <img src='../img/sun.svg' width={60}></img>
                                <span className='p-2'>
                                    <span className='fw-bold'>Friday </span><span>09/19</span><br></br>
                                    <p>A mix of clouds and sun. Hazy. High 93F. Winds light and variable.</p>
                                </span>
                            </span>
                        </Col>
                        <Col>
                            <span className='d-flex'>
                                <img src='../img/moon.svg' width={60}></img>
                                <span className='p-2'>
                                    <span className='fw-bold'>Friday Night </span><span>09/19</span><br></br>
                                    <p>A few clouds. Hazy. Low 81F. Winds light and variable.</p>
                                </span>
                            </span></Col>
                    </Row>

                </Carousel.Item>


                <Carousel.Item>
                    <h4 className="text-center m-3">Hourly Forecast for Today, Saturday 09/20</h4>
                    <Row className='mt-6 mb-6'>
                        <Col>
                            <span className='d-flex'>
                                <img src='../img/sun.svg' width={60}></img>
                                <span className='p-2'>
                                    <span className='fw-bold'>Saturday </span><span>09/19</span><br></br>
                                    <p>A mix of clouds and sun. Hazy. High 93F. Winds light and variable.</p>
                                </span>
                            </span>
                        </Col>
                        <Col>
                            <span className='d-flex'>
                                <img src='../img/moon.svg' width={60}></img>
                                <span className='p-2'>
                                    <span className='fw-bold'>Saturday Night </span><span>09/19</span><br></br>
                                    <p>A few clouds. Hazy. Low 81F. Winds light and variable.</p>
                                </span>
                            </span></Col>
                    </Row>
                </Carousel.Item>
            </Carousel> */}

            {/* <hr /> */}
            {astro && (
                <Row className='mt-8 mb-6'>
                    <Col>
                        <span className='d-flex'>
                            <img src='../img/sun-png.png' width={50} alt="Sun Icon" />
                            <span className='m-3'>
                                <span className='fw-bold'>Sun</span><br />
                                <span> <img src='../img/Sunrise.png' width={30} alt="Sunrise Icon" /> {astro.sunrise}</span>
                                <span> <img src='../img/sunset.png' width={30} alt="Sunset Icon" /> {astro.sunset}</span>
                            </span>
                        </span>
                    </Col>
                    <Col>
                        <span className='d-flex'>
                            <img src='../img/moonrise.png' width={50} alt="Moonrise Icon" />
                            <span className='p-3'>
                                <span className='fw-bold'>Moon</span><br />
                                <span> <img src='../img/moonrise.png' width={30} alt="Moonrise Icon" /> {astro.moonrise}</span>
                                <span> <img src='../img/moonset.png' width={30} alt="Moonset Icon" /> {astro.moonset}</span>
                            </span>
                        </span>
                    </Col>
                </Row>
            )}

            <Row className='mt-5'>

                {hourlyData && hourlyData.length > 0 ? (
                    <Table responsive striped bordered>
                        <thead>
                            <tr>
                                <th>Time</th>
                                <th>Conditions</th>
                                <th>Temp (°F)</th>
                                <th>Feels Like</th>
                                <th>Precip (mm)</th>
                                <th>Cloud Cover</th>
                                <th>Due Point</th>
                                <th>Humidity (%)</th>
                                <th>Wind (km/h)</th>
                                <th>Pressure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hourlyData.map((hour) => (
                                <tr key={hour.time_epoch}>
                                    <td className="align-middle">{hour.time}</td>
                                    <td>
                                        {hour.condition && hour.condition.icon ? (
                                            <div>
                                                {hour.condition.text} <img src={hour.condition.icon} alt="Weather Icon" className="custom-img-height"/>
                                            </div>
                                        ) : (
                                            'N/A'
                                        )}
                                    </td>


                                    <td className="align-middle">{hour.temp_f} °F</td>
                                    <td className="align-middle">{hour.feelslike_f} °F</td>
                                    <td className="align-middle">{hour.precip_mm} %</td>
                                    <td className="align-middle">{hour.cloud} %</td>
                                    <td className="align-middle">{hour.dewpoint_f} °F</td>
                                    <td className="align-middle">{hour.humidity} %</td>
                                    <td className="align-middle">{hour.wind_kph}</td>
                                    <td className="align-middle">{hour.pressure_in}</td>



                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p>No hourly data available.</p>
                )}

            </Row>
        </Container>
    )
}

export default Hourly