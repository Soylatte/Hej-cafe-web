import './Home.css';
import Card from 'react-bootstrap/Card';
import Imac from '../assets/Imac.jpg';

function Home() {
  return (
    <Card>
        <Card.Img variant="top" src={Imac} alt="Imac"/>
        <Card.ImgOverlay>
      <Card.Title className='fs-1 text-white'>SEE YOU IN STORE!</Card.Title>
      <Card.Body>
        <Card.Title className='fs-1 text-white'>OUR OPENING HOURS</Card.Title>
        <Card.Text className='fs-1 text-white'>
        MON - SUN : 6am - 9:30pm
        </Card.Text>

      </Card.Body>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Home;
