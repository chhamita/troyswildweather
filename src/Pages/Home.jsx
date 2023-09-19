import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Home() {
    return (
        <>
            <Container className=''>
                <Row className='mt-4 mb-4'>
                    <Col className='bg-light p-3'>
                        <span className='d-flex'>
                            <img src='img/sun.svg' className='w-25'></img>
                            <span className='p-2'>
                                <span className='fw-bold'>TODAY</span><br></br>
                                <span className='fw-bold'>TUE 09/19</span><br></br>
                                <p className='fw-normal'>HIGH 92 F</p>
                            </span>
                        </span>
                        <p>Partly cloudy. Hazy. High 92F. Winds light and variable.</p>

                    </Col>
                    <Col className='bg-light p-3'>
                        <span className='d-flex'>
                            <img src='img/moon.svg' className='w-25'></img>
                            <span  className='p-2'>
                                <span className='fw-bold'>TONIGHT</span><br></br>
                                <span className='fw-bold'>TUE 09/19</span><br></br>
                                <span className='fw-normal'>Low 80 F</span>
                               
                            </span>
                        </span>
                        <p>A few clouds. Hazy. Low near 80F. Winds light and variable.</p>
                    </Col>
                    <Col className='bg-light p-3'>
                        <span className='d-flex'>
                            <img src='img/sun.svg' className='w-25'></img>
                            <span  className='p-2'>
                                <span className='fw-bold'>TOMORROW</span><br></br>
                                <span className='fw-bold'>TUE 09/20</span><br></br>
                                <span className='fw-normal'>HIGH 92 F</span>
                            </span>
                        </span>
                        <p>Sunshine and clouds mixed. Hazy. High 92F. Winds light and variable.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home