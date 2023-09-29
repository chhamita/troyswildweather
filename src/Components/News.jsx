import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
// import /public/img/logo.png from '/public/img/logo.png';

function News(props) {
    let newsData = props.newsData

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card className='border-0 shadow mt-3' >
                            <Card.Body>
                                <Card.Title className='mb-4'><h3 className='mb-0'>News</h3></Card.Title>
                                <ul className='list-unstyled mb-0'>
                                    {newsData.map((article) => (
                                        <li key={article.title}>
                                            
                                            <Link  to={`/news/${encodeURIComponent(article.title)}`} className='d-flex text-decoration-none text-black py-3'>
                                                <div className='news-img-box '>
                                                    <img src={article.image} width={200} className='rounded' />
                                                </div>
                                                <div className='news-content ms-3'>
                                                    <h5 className='mb-0'>{article.title}</h5>
                                                    <div className="news-date small mb-1 text-secondary">{article.source.name}</div>
                                                    <div className="">{article.description}</div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default News