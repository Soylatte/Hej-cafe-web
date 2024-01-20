import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import regulars from '../assets/regulars.jpg';
import Form from 'react-bootstrap/Form';
import './Regular.css';


function Regulars() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Card className="bg-dark text-white">
      <Card.Img src={regulars} alt="regulars" />
      <Card.ImgOverlay>
        <h1 className='header-re'>JOIN THE WAITLIST!</h1>
        <div className='input-btn'>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Type your email"
          aria-label="email"
          aria-describedby="basic-addon1"
        />
       <Button  className='btn-2'variant="outline-secondary" id="button-addon1" size='lg' onClick={handleShow}>
          JOIN!
        </Button>
      </InputGroup>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You have successfully join the waitlist!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>

        </Modal.Footer>
      </Modal>
      </Card.ImgOverlay>
    </Card>
    </>
  );
}

export default Regulars;