import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

export default function History() {
    return (
        <Container>
            <div className='mb-4'>
                <form>
                    <div className='d-flex justify-content-center w-75 mx-auto'>
                        <select className="form-select me-3 border-primary">
                            <option selected>January</option>
                            <option selected>February</option>
                            <option selected>March</option>
                            <option selected>April</option>
                            <option selected>May</option>
                            <option selected>June</option>
                            <option selected>July</option>
                            <option selected>August</option>
                            <option selected>September</option>
                            <option selected>October</option>
                            <option selected>November</option>
                            <option selected>December</option>
                        </select>
                        <select className="form-select me-3 border-primary">
                            <option value="0: 1" selected="selected" >1</option>
                            <option value="1: 2" selected="" >2</option>
                            <option value="2: 3" selected="" >3</option>
                            <option value="3: 4" selected="" >4</option>
                            <option value="4: 5" selected="" >5</option>
                            <option value="5: 6" selected="" >6</option>
                            <option value="6: 7" selected="" >7</option>
                            <option value="7: 8" selected="" >8</option>
                            <option value="8: 9" selected="" >9</option>
                            <option value="9: 10" selected="" >10</option>
                            <option value="10: 11" selected="" >11</option>
                            <option value="11: 12" selected="" >12</option>
                            <option value="12: 13" selected="" >13</option>
                            <option value="13: 14" selected="" >14</option>
                            <option value="14: 15" selected="" >15</option>
                            <option value="15: 16" selected="" >16</option>
                            <option value="16: 17" selected="" >17</option>
                            <option value="17: 18" selected="" >18</option>
                            <option value="18: 19" selected="" >19</option>
                            <option value="19: 20" selected="" >20</option>
                            <option value="20: 21" selected="" >21</option>
                            <option value="21: 22" selected="" >22</option>
                            <option value="22: 23" selected="" >23</option>
                            <option value="23: 24" selected="" >24</option>
                            <option value="24: 25" selected="" >25</option>
                            <option value="25: 26" selected="" >26</option>
                            <option value="26: 27" selected="" >27</option>
                            <option value="27: 28" selected="" >28</option>
                            <option value="28: 29" selected="" >29</option>
                            <option value="29: 30" selected="" >30</option>
                        </select>
                        <select className="form-select me-3 border-primary">
                            <option selected>2001</option>
                            <option selected>2002</option>
                            <option selected>2003</option>
                            <option selected>2004</option>
                            <option selected>2005</option>
                            <option selected>2006</option>
                            <option selected>2007</option>
                            <option selected>2008</option>
                            <option selected>2009</option>
                            <option selected>2010</option>
                            <option selected>2011</option>
                            <option selected>2012</option>
                            <option selected>2013</option>
                            <option selected>2014</option>
                            <option selected>2015</option>
                            <option selected>2016</option>
                            <option selected>2017</option>
                            <option selected>2019</option>
                            <option selected>2020</option>
                            <option selected>2021</option>
                            <option selected>2022</option>
                            <option selected>2023</option>
                        </select>
                        <button type='submit' className='btn btn-primary'>View</button>
                    </div>

                </form>
            </div>

            <Row className=''>
                <Col>
                    <Card className='border-0 shadow rounded'>
                        <Card.Body className='p-0'>
                            <div className='p-3'><h3 className='pb-3 mb-0'>Summary</h3></div>
                            <Accordion defaultActiveKey="0" className='history-accordion' >
                                <Accordion.Item eventKey="1" className='border-0 border-top rounded-0'>
                                    <Accordion.Header>
                                        <ListGroup className="w-100" variant="flush" >
                                            <ListGroup.Item className='d-flex'>
                                                <span className='fw-semibold'>Temperature (°F)</span>
                                                <span className='fw-semibold'>Max</span>
                                                <span className='fw-semibold'>Average</span>
                                                <span className='fw-semibold'>Min</span>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup className=""  >
                                            <ListGroup.Item className='d-flex'>
                                                <span className=''>Max Temperature</span>
                                                <span>94</span>
                                                <span>90.5</span>
                                                <span>82</span>
                                            </ListGroup.Item>
                                            <ListGroup.Item className='d-flex'>
                                                <span>Avg Temperature</span>
                                                <span>94</span>
                                                <span>90.5</span>
                                                <span>82</span>
                                            </ListGroup.Item>
                                            <ListGroup.Item className='d-flex'>
                                                <span>Min Temperature</span>
                                                <span>94</span>
                                                <span>90.5</span>
                                                <span>82</span>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='border-0 border-top rounded-0'>
                                    <Accordion.Header>
                                        <ListGroup className="w-100" variant="flush" >
                                            <ListGroup.Item className='d-flex'>
                                                <span className='fw-semibold'>Dew Point (°F)</span>
                                                <span className='fw-semibold'>Max</span>
                                                <span className='fw-semibold'>Average</span>
                                                <span className='fw-semibold'>Min</span>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup className=""  >
                                            <ListGroup.Item className='d-flex'>
                                                <span className=''>Dew Point</span>
                                                <span>94</span>
                                                <span>90.5</span>
                                                <span>82</span>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='border-0 border-top rounded-0'>
                                    <Accordion.Header>
                                        <ListGroup className="w-100" variant="flush" >
                                            <ListGroup.Item className='d-flex'>
                                                <span className='fw-semibold'>Wind (mph)</span>
                                                <span className='fw-semibold'>Max</span>
                                                <span className='fw-semibold'>Average</span>
                                                <span className='fw-semibold'>Min</span>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup className=""  >
                                            <ListGroup.Item className='d-flex'>
                                                <span className=''>Wind</span>
                                                <span>94</span>
                                                <span>90.5</span>
                                                <span>82</span>
                                            </ListGroup.Item>
                                            <ListGroup.Item className='d-flex'>
                                                <span>Gust Wind</span>
                                                <span>0</span>
                                                <span>0</span>
                                                <span>0</span>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='border-0 border-top'>
                                    <Accordion.Header>
                                        <ListGroup className="w-100" variant="flush" >
                                            <ListGroup.Item className='d-flex'>
                                                <span className='fw-semibold'>Sea Level Pressure (in)</span>
                                                <span className='fw-semibold'>Max</span>
                                                <span className='fw-semibold'>Average</span>
                                                <span className='fw-semibold'>Min</span>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ListGroup className=""  >
                                            <ListGroup.Item className='d-flex'>
                                                <span className=''>Sea Level Pressure</span>
                                                <span>0</span>
                                                <span>0</span>
                                                <span>0</span>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
