import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../assets/scss/style.scss'
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureHigh } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faPooStorm } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';

function Today(props) {
    let currentWeather = props.currentWeather
    console.log(currentWeather,'currentWeather')
    if (!currentWeather) {
        return null; // or render a loading message or fallback content
      }
  return (
    <Container className=''>
    <Card className='bg-light mt-3'>
        <Card.Header className="fw-normal fs-4" style={{ color: '#fff', backgroundColor: '#3D3849' }}>
          {currentWeather.current && currentWeather.current.last_updated}
        </Card.Header>
        <Card.Body style={{ color: '#fff', backgroundColor: '#736792' }}>
          <Card.Title>
            <span>
              {currentWeather.current.condition && (
                <img src={currentWeather.current.condition.icon} width={100} alt="Weather Icon" />
              )}
              <span className="fw-bolder fs-1 ps-3">
                {currentWeather.current.feelslike_c}°
              </span>
            </span>
            <span className='float-end'>
              {currentWeather.current &&
                <h5 className="fw-bold fs-4">
                   {currentWeather.current.temp_c}°
                </h5>
              }
            </span>
            {currentWeather.current.condition && (
              <h5>{currentWeather.current.condition.text}</h5>
            )}
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    <Row className='my-4'>
        <Col className='pe-0'>
            <div className='bg-light p-3 h-100'>
                <span className='d-flex'>
                    <img src='../img/sun.svg' className='w-25'></img>
                    <span className='p-2'>
                        <span className='fw-bold'>TODAY</span><br></br>
                        <span className='fw-bold'>TUE 09/19</span><br></br>
                        <p className='fw-normal'>HIGH 92 F</p>
                    </span>
                </span>
                <p>Partly cloudy. Hazy. High 92F. Winds light and variable.</p>
            </div>
        </Col>
        <Col className='px-0'>
            <div className='bg-color-gray p-3 h-100'>
                <span className='d-flex'>
                    <img src='../img/moon.svg' className='w-25'></img>
                    <span className='p-2'>
                        <span className='fw-bold'>TONIGHT</span><br></br>
                        <span className='fw-bold'>TUE 09/19</span><br></br>
                        <span className='fw-normal'>Low 80 F</span>

                    </span>
                </span>
                <p>A few clouds. Hazy. Low near 80F. Winds light and variable.</p>
            </div>
        </Col>
        <Col className='ps-0'>
            <div className='bg-light p-3 h-100'>
                <span className='d-flex'>
                    <img src='../img/sun.svg' className='w-25'></img>
                    <span className='p-2'>
                        <span className='fw-bold'>TOMORROW</span><br></br>
                        <span className='fw-bold'>TUE 09/20</span><br></br>
                        <span className='fw-normal'>HIGH 92 F</span>
                    </span>
                </span>
                <p>Sunshine and clouds mixed. Hazy. High 92F. Winds light and variable.</p>
            </div>
        </Col>
    </Row>

    <Row className='mb-4'>
        <Col className='' >
            <div className='bg-light' >
                <h4 className='mb-0 px-3 py-2 bg-secondary text-white'>Weather Today</h4>
                <div className='p-4'>
                    <Row>
                        <Col>
                            <h6 className=''>Feels Like </h6>
                            <h4 className='fs-2'>{currentWeather.current.feelslike_c}°</h4>
                        </Col>
                        {/* <Col>
                            <span className='d-inline-block'>
                                <img src='../img/rise.png' width={50} className='ps-3'></img> 6:00 am
                            </span>
                            <span className='d-inline-block'>
                                <img src='../img/rise.png' width={50} className='ps-3'></img> 7:00 am
                            </span>                                  
                        </Col> */}
                    </Row>

                    <Row>
                        <Col>
                            <div className=''>
                                <ListGroup className=""  >
                                    <ListGroup.Item className='bg-light'>
                                        <span className='float-start'><FontAwesomeIcon icon={faTemperatureHigh} /> Temprature</span>
                                        <span className='float-end'> {currentWeather.current.temp_c} ° C</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-top bg-light'>
                                        <span className='float-start'><FontAwesomeIcon icon={faDroplet} /> Humidity</span>
                                        <span className='float-end '>   {currentWeather.current.humidity}%</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-top bg-light'>
                                        <span className='float-start p-1'><FontAwesomeIcon icon={faPooStorm} /> Pressure
                                        </span>
                                        <span className='float-end'>   {currentWeather.current.pressure_mb} mb</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-top bg-light'>
                                        <span className='float-start p-1'><FontAwesomeIcon icon={faEye} /> Visibility
                                        </span>
                                        <span className='float-end'>
                                         {currentWeather.current.vis_km} km</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col>
                            <div className=''>
                                <ListGroup className=""  >
                                    <ListGroup.Item className='border-top bg-light rounded-0'>
                                        <span className='float-start'><FontAwesomeIcon icon={faWind} /> Wind</span>
                                        <span className='float-end'> {currentWeather.current.wind_kph}  km/h</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-top bg-light'>
                                        <span className='float-start'><FontAwesomeIcon icon={faDroplet} />Preciption </span>
                                        <span className='float-end '> {currentWeather.current.precip_in} % </span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-top bg-light'>
                                        <span className='float-start p-1'><FontAwesomeIcon icon={faPooStorm} /> UV Index
                                        </span>
                                        <span className='float-end'> {currentWeather.current.uv} </span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className='border-top bg-light'>
                                        <span className='float-start p-1'><FontAwesomeIcon icon={faEye} /> Gust
                                        </span>
                                        <span className='float-end'>
                                        
                                        {currentWeather.current.gust_kph} km/h</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        </Col>
    </Row>
</Container >
  )
}

export default Today