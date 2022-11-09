import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../styles/contact.scss";
import { useAuth} from "../config/firebase";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const currentUser = useAuth();


  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault()
    setShow(true);
    setValue("");

  }



  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={handleShow}>
                <FormGroup className="contact__form">
                  <Input 
                  required 
                  placeholder="Email" 
                  type="email" 
                  defaultValue={currentUser?.email}
                />
                </FormGroup>

              

             

                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    className="textarea"
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  ></textarea>
                </FormGroup>

                <Button style={{backgroundColor: "#000d6b"}} type='submit' variant="primary" >
                  Send Message
                </Button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  Ho Chi Minh City, Viet Nam
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Phone:</h6>
                  <p className="section__description mb-0">+0939029037</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    nvtrung30796@gmail.com
                  </p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

         
            <Modal show={show} onHide={handleClose}>
              <Modal.Header className="modal__title">
                <Modal.Title>Success!</Modal.Title>
                <FontAwesomeIcon className="check__icon" icon={faCheckCircle}></FontAwesomeIcon>
              </Modal.Header>
              <Modal.Body>
                Your message has been sent successfully
              </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={handleClose}>
                  OK THANKS
                </Button>
               
              </Modal.Footer>
            </Modal>
          
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
