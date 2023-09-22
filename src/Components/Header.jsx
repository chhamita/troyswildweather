import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Header() {
    return (
        <>
            <div className='bg-gradient-header text-white'>
                <Container className=''>
                    <Row>
                        <Col>
                            <div className="">
                                <img className='img-fluid' src="../img/FullLogo_NoBuffer.jpg" />
                                {/* <h3 className='p-4'>Troys Wild Weather</h3> */}
                            </div>
                        </Col>
                        <Col className='bg-gradient-header text-white'>
                            <Navbar expand="lg" className="bg-body-tertiary bg-gradient-header p-0">
                                <Container className='bg-gradient-header text-white p-4'>

                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav ">
                                        <Nav className="me-auto text-white text-center">

                                            <Nav.Link href="/home" className='text-white pr-16'>Today</Nav.Link>
                                            <Nav.Link href="/hourly" className='text-white'>Hourly</Nav.Link>
                                            <Nav.Link href="#link" className='text-white'>10 Days</Nav.Link>
                                            <Nav.Link href="#link1" className='text-white'>Monthly</Nav.Link>

                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                        <Col> <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search Location"
                                        className="mr-sm-2 mt-4"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button className='mt-4' type="submit">Search</Button>
                                </Col>
                            </Row>
                        </Form></Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Header