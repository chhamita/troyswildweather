import React from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { AxiosInstance } from '../Utils';

function TenDays() {
    const [region, setRegion] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [tenDaysData, setTenDaysData] = React.useState([]);
    const [weatherData, setWeatherData] = React.useState(null);
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
                            days: '10',
                            aqi: 'yes',
                            alerts: 'yes',
                        },
                    });

                     setWeatherData(response.data);
                    const extractedHourlyData = response.data;
                    setTenDaysData(extractedHourlyData);


                } catch (error) {
                    console.error('Error fetching weather data:', error);
                } finally {
                    setLoading(false);
                }
            };

            fetchWeatherData();
        }
    }, [region]);



    console.log(tenDaysData, 'tenDaysData')


    const renderDailyTables = () => {
        if (weatherData && weatherData.forecast && weatherData.forecast.forecastday) {
            return weatherData.forecast.forecastday.map((day) => (
                <div key={day.date_epoch}>
                    <h3>{day.date}</h3>
                    <Table responsive striped bordered>
                        <thead>
                            <tr>
                                <th>Max Temp (°F)</th>
                                <th>Min Temp (°F)</th>
                                <th>Avg Temp (°F)</th>
                                <th>Max Wind (mph)</th>
                                <th>Total Precip (in)</th>
                                <th>UV Index</th>
                                <th>Conditions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{day.day.maxtemp_f} °F</td>
                                <td>{day.day.mintemp_f} °F</td>
                                <td>{day.day.avgtemp_f} °F</td>
                                <td>{day.day.maxwind_mph} mph</td>
                                <td>{day.day.totalprecip_in} in</td>
                                <td>{day.day.uv}</td>
                                <td>{day.day.condition.text}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            ));
        }
        return null;
    };



    return (
        <Container className="mt-4">
            <Row className="mt-8 mb-6">
                {/* Display sunrise and sunset info here */}
            </Row>

            {loading ? (
                <p>Loading...</p>
            ) : (
                renderDailyTables()
            )}
        </Container>
    )
}

export default TenDays