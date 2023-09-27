import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { AxiosInstance } from '../Utils';
import axios from 'axios';

function Hourly() {
    // const [weatherData, setWeatherData] = React.useState(null);
    const [hourlyData, setHourlyData] = React.useState([]);
    const [astro, setAstro] = React.useState(null);
    const [region, setRegion] = React.useState(null);
    // const [countryName, setCountryName] = React.useState('Unknown');
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day}`;

        const fetchCountryFromIP = async () => {
            try {
                const response = await axios.get('https://ipinfo.io/json?token=c68192fd24aa17');
                setRegion(response.data.region);
                //setCountryName(response.data.country || 'Unknown');
            } catch (error) {
                console.error('Error fetching IP geolocation data:', error);
            }
        };

        fetchCountryFromIP();

        if (region) {
            const fetchWeatherData = async () => {
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

                    //   setWeatherData(response.data);
                    const extractedHourlyData = response.data?.forecast?.forecastday?.[0]?.hour || [];
                    setHourlyData(extractedHourlyData);
                    const astroData = response.data?.forecast?.forecastday?.[0]?.astro || null;
                    setAstro(astroData);
                } catch (error) {
                    console.error('Error fetching weather data:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchWeatherData();
        }
    }, [region]);

    return (
        <Container className="mt-4">
            <Row className="mt-8 mb-6">
                <Col>
                    <span className="d-flex">
                        <img src="../img/sun-png.png" width={50} alt="Sun Icon" />
                        <span className="m-3">
                            <span className="fw-bold">Sun</span>
                            <br />
                            <span>
                                <img src="../img/Sunrise.png" width={30} alt="Sunrise Icon" /> {astro?.sunrise || 'N/A'}
                            </span>
                            <span>
                                <img src="../img/sunset.png" width={30} alt="Sunset Icon" /> {astro?.sunset || 'N/A'}
                            </span>
                        </span>
                    </span>
                </Col>
                <Col>
                    <span className="d-flex">
                        <img src="../img/moonrise.png" width={50} alt="Moonrise Icon" />
                        <span className="p-3">
                            <span className="fw-bold">Moon</span>
                            <br />
                            <span>
                                <img src="../img/moonrise.png" width={30} alt="Moonrise Icon" /> {astro?.moonrise || 'N/A'}
                            </span>
                            <span>
                                <img src="../img/moonset.png" width={30} alt="Moonset Icon" /> {astro?.moonset || 'N/A'}
                            </span>
                        </span>
                    </span>
                </Col>
            </Row>

            <Row className="mt-5">
                {loading ? (
                    <p>Loading...</p>
                ) : hourlyData.length > 0 ? (
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
                                                {hour.condition.text}{' '}
                                                <img src={hour.condition.icon} alt="Weather Icon" className="custom-img-height" />
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
    );
}

export default Hourly;
