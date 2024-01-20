import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Menu.css'
import icedamericano from '../assets/icedamericano.jpg';
import bag from '../assets/bag.jpg';
import pink from '../assets/pink.jpg';

function Menu() {
  return (
    <>
    <div className='header-menu'>OUR BEST 3</div>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={icedamericano} />
        <Card.Body>
          <Card.Title>ICED AMERICANO</Card.Title>
          <Card.Text>
            Darkroast Coffee taste like cinnamon and milk chocolate
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Small Medium Large available</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={bag}/>
        <Card.Body>
          <Card.Title>BLONDE COFFEE</Card.Title>
          <Card.Text>
          lighter roast than traditional espresso, with a delicate flavor that is often described as softer and more balanced. Many coffee lovers enjoy blonde espresso as an alternative to darker roasts, as it can be less bitter and more refreshin{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Ground in store available</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={pink} />
        <Card.Body>
          <Card.Title>SUMATRA COFFEE</Card.Title>
          <Card.Text>
          With a body as full as any premium coffees, Sumatra Mandheling is frequently described as syrupy. Despite a subdued acidity the tastes are complex and intense, and a chocolate sweet flavor often holds earthy undertones Notes of licorice may also be present.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Ground in store available</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </>
  );
}

export default Menu;