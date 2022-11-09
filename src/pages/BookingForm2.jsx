import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Form, FormGroup } from "reactstrap";
import masterCard from "../../src/assets/all-images/master-card.jpg";
import paypal from "../../src/assets/all-images/paypal.jpg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { useAuth} from "../config/firebase";

function BookingForm2() {
  const [show, setShow] = useState(false);
  const [inputFirstname, setInputFirstname] = useState('')
  const [inputLastname, setInputLastname] = useState('')
  const [inputPhone, setInputPhone] = useState('')
  const [inputMessage, setInputMessage] = useState('')
  const [inputDate, setInputDate] = useState('')
  const [inputTime, setInputTime] = useState('')



  const currentUser = useAuth();


  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault()
    setShow(true);
    setInputFirstname("")
    setInputLastname("")
    setInputPhone("")
    setInputMessage("")
    setInputDate("")
    setInputTime("")


  }
  return (
    <>
      <Container>
        <Row>
          <Form onSubmit={handleShow}>
            
            <Col  className="mt-5">
            <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
              </div>
              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input value={inputFirstname} onChange={(e) => setInputFirstname(e.target.value)} name='firstname'  required type="text" placeholder="First Name" />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input value={inputLastname} onChange={(e) => setInputLastname(e.target.value)} name='lastname' required type="text" placeholder="Last Name" />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input required defaultValue={currentUser?.email} type="email" placeholder="Email" />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input value={inputPhone} onChange={(e) => setInputPhone(e.target.value)} required type="number" placeholder="Phone Number" />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
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
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
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

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <select name="" id="">
                  <option value="1 person">1 Person</option>
                  <option value="2 person">2 Person</option>
                  <option value="3 person">3 Person</option>
                  <option value="4 person">4 Person</option>
                  <option value="5+ person">5+ Person</option>
                </select>
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <select name="" id="">
                  <option value="1 luggage">1 luggage</option>
                  <option value="2 luggage">2 luggage</option>
                  <option value="3 luggage">3 luggage</option>
                  <option value="4 luggage">4 luggage</option>
                  <option value="5+ luggage">5+ luggage</option>
                </select>
              </FormGroup>

              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input value={inputDate} onChange={(e) => setInputDate(e.target.value)} type="date" placeholder="Journey Date" />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                  type="time"
                  placeholder="Journey Time"
                  className="time__picker"
                  value={inputTime} onChange={(e) => setInputTime(e.target.value)}
                />
              </FormGroup>

              <FormGroup>
                <textarea
                  rows={5}
                  type="textarea"
                  className="textarea"
                  placeholder="Leave a message"
                  required
                  value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}
                ></textarea>
              </FormGroup>
            </Col>

            <Col lg="5" className="mt-5">
            <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
              </div>
              <div className="payment">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                  <input type="radio" /> Direct Bank Transfer
                </label>
              </div>

              <div className="payment mt-3">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                  <input type="radio" /> Cheque Payment
                </label>
              </div>

              <div className="payment mt-3 d-flex align-items-center justify-content-between">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                  <input type="radio" /> Master Card
                </label>

                <img src={masterCard} alt="" />
              </div>

              <div className="payment mt-3 d-flex align-items-center justify-content-between">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                  <input type="radio" /> Paypal
                </label>

                <img src={paypal} alt="" />
              </div>
            </Col>
          
            <Button className=" mt-5" style={{backgroundColor: "#000d6b"}} type='submit' variant="primary" >
            Reserve Now
                </Button>
          </Form>
        </Row>
        <Modal show={show} onHide={handleClose}>
              <Modal.Header className="modal__title">
                <Modal.Title>Success!</Modal.Title>
                <FontAwesomeIcon className="check__icon" icon={faCheckCircle}></FontAwesomeIcon>
              </Modal.Header>
              <Modal.Body>
                You successfully created your booking
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                  OK THANKS
                </Button>
               
              </Modal.Footer>
            </Modal>
      </Container>
    </>
  );
}

export default BookingForm2;
