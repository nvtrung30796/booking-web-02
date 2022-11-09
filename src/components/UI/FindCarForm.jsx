import React, { useState } from "react";
import "../../styles/find-car-form.scss";
import { Form, FormGroup } from "reactstrap";
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom'

const FindCarForm = () => {
  const [show, setShow] = useState(false);
  const [valueCar, setValueCar] = useState('');
  const handleClose = () => setShow(false);

  const navigate = useNavigate()
  const handleShow = (e) => {
    e.preventDefault()
    setShow(true);

  }

  const findCar = (value) => {
    setValueCar(value)
  }
  


  const handleFind = () => {
    if (valueCar === 'Model-01') {
        navigate('/cars/Tesla%20Malibu')
    } 
    else if (valueCar === 'Model-02') {
        navigate('/cars/Toyota%20Aventador')
    }
    else if (valueCar === 'Model-03') {
      navigate('/cars/BMW%20X3')
  }
    else if (valueCar === 'Model-04') {
        navigate('/cars/Nissan%20Mercielago')
    }
    else if (valueCar === 'Model-05') {
      navigate('/cars/Ferrari%20Camry')
    }
    else if (valueCar === 'Model-06') {
      navigate('/cars/Mercedes%20Benz%20XC90')
    }
    else if (valueCar === 'Model-07') {
      navigate('/cars/Audi%20Fiesta')
    }
    else if (valueCar === 'Model-08') {
      navigate('/cars/Rolls%20Royce%20Colorado')
    }

  }






  return (
    <Form className="form" onSubmit={handleShow}>
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="select__group">
          <select name="country" class="country">
            <option value="">From Address</option>
            <option value="Canada">Canada</option>
            <option value="United_States">United States</option>
            <option value="California">California</option>
            <option value="Alaska">Alaska</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Colorado">Colorado</option>
            <option value="Florida">Florida</option>
            <option value="Oregon">Oregon</option>
          </select>
        </FormGroup>

        <FormGroup className="select__group">
          <select name="country" class="country">
            <option value="">To Address</option>
            <option value="Canada">Canada</option>
            <option value="United_States">United States</option>
            <option value="California">California</option>
            <option value="Alaska">Alaska</option>
            <option value="Hawaii">Hawaii</option>
            <option value="Colorado">Colorado</option>
            <option value="Florida">Florida</option>
            <option value="Oregon">Oregon</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup onChange={e => findCar(e.target.value)} className="select__group">
          <select>
            <option value="Model">Model</option>
            <option value="Model-01">Model-01</option>
            <option value="Model-02">Model-02</option>
            <option value="Model-03">Model-03</option>
            <option value="Model-04">Model-04</option>
            <option value="Model-05">Model-05</option>
            <option value="Model-06">Model-06</option>
            <option value="Model-07">Model-07</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
        <Button className="btn find__car-btn" style={{backgroundColor: "#000d6b"}} type='submit' variant="primary" >
                  Find Car
                </Button>
        </FormGroup>
      </div>

      <Modal show={show} onHide={handleClose}>
              <Modal.Header className="modal__title">
                <Modal.Title>Success!</Modal.Title>
                <FontAwesomeIcon className="check__icon" icon={faCheckCircle}></FontAwesomeIcon>
              </Modal.Header>
              <Modal.Body>
                1 Car Suits You
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleFind}>
                  Go
                </Button>
               
              </Modal.Footer>
            </Modal>
    </Form>
  );
};

export default FindCarForm;
