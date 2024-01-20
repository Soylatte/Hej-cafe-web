import Carousel from 'react-bootstrap/Carousel';
import coldbrew from '../assets/coldbrew.jpg'
import wrok from '../assets/wrok.jpg'
import Latte from '../assets/Latte.jpg'

function About() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={wrok} />
        <Carousel.Caption>
          <h3>SINCE</h3>
          <p>In August 2020, we launched our first location,
          a 5x10 coffee cart nestled in the garden of the Wythe diner in Seoul
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={coldbrew} />
        <Carousel.Caption>
          <h3>TRY OUT!</h3>
          <p> The cold brew with a cult following is finally back.
             Made with your favorite milk and our house-made syrup to add a festive twist to your daily routine.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Latte} />
        <Carousel.Caption>
          <h3>OUR PASSION</h3>
          <p>
          we’re offering an all around better ritual.See you in store.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default About;