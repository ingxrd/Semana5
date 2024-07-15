import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';


function Home(){
    return(
        <main>
            <h1 className="text-center">Welcome! 🐝</h1>
            <CardGroup>
                <Card defaultActiveKey="0">
                    <Card.Img variant="top" src="https://media.flyingflowers.co.uk/i/flyingflowers/bee.jpg?fmt=auto&qlt=default&fmt.jp2.qlt=60&bg=rgb%28254%2C+200%2C+0%29&h=512"/>
                <Card.Body>
                    <Card.Title>Bees are cool!</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget mattis est, vel euismod ipsum. </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Nunc elit leo, blandit a imperdiet vitae, volutpat et purus. </small>
                </Card.Footer>
                </Card>

                <Card defaultActiveKey="1">
                    <Card.Img variant="top" src="https://d.newsweek.com/en/full/2076607/western-honeybee.jpg?w=1600&h=1600&q=88&f=4618adde1cf8bd190aebb1790ab95482"/>
                <Card.Body>
                    <Card.Title>Bees are smart!</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget mattis est, vel euismod ipsum. </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Nunc elit leo, blandit a imperdiet vitae, volutpat et purus. </small>
                </Card.Footer>
                </Card>

                <Card defaultActiveKey="2">
                    <Card.Img variant="top" src="https://www.littletreegardenmarket.ca/files/images/news/how-to-support-the-bumble-bees-1000x1000-6314a8a376239_n.webp"/>
                <Card.Body>
                    <Card.Title>Bees are friendly!</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget mattis est, vel euismod ipsum. </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Nunc elit leo, blandit a imperdiet vitae, volutpat et purus. </small>
                </Card.Footer>
                </Card>
            </CardGroup>
            <Link to="/contato" className="mt-1 mx-auto d-block">
            <Button variant="warning" className="mt-5 me-5">Ficou interessado? Entre em contato!</Button>
            </Link>

        </main>
    )
}

export default Home;