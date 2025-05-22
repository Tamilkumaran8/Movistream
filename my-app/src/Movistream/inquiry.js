import "./inquiry.css";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import React, { useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import money from './images/money.jpg';

const  About=() => {
     const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);
  const handlesubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (formData.phone.length !== 10) {
        return;
      }
      console.log(formData);
      setFormData({ name: "", phone: "", email: "", msg: "" });
    },
    [formData]
  );
  return (
    <>
      <section className="contactus" id="reviews">
        <div className="backimg-testimonial">
         
          <h2 className="testimonial-center">Reviews</h2>
          <hr></hr>
          <div className="container my-3">
            <Carousel>
              <Carousel.Item style={{ minHeight: "200px" }}>
                <div className="d-flex align-items-center justify-content-center testi-color-1  text-white p-5 rounded">
                  <div className="text-center">
                    <h5 className="mb-4 contact-para">
                     "A visually arresting film that delves deep into the complexities of identity and ambition."
                    </h5>
                    <p className="testi-color contact-para">
                      <small>- Brady Corbet</small>
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item style={{ minHeight: "200px" }}>
                <div className="d-flex align-items-center justify-content-center testi-color-2 p-5 text-white rounded">
                  <div className="text-center">
                    <h5 className="mb-4 contact-para">
                      "A dazzling adaptation that brings the beloved Broadway musical to life with grandeur and heart."
                    </h5>
                    <p className="testi-color contact-para">
                      <small>- Jon M. Chu</small>
                    </p>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item style={{ minHeight: "200px" }}>
                <div className="d-flex align-items-center justify-content-center testi-color-3 p-5 text-white rounded">
                  <div className="text-center">
                    <h5 className="mb-4 contact-para">
                      "  A mesmerizing film that captures the essence of human connection amidst the city's chaos."
                    </h5>
                    <p className="testi-color contact-para">
                      <small>- Steve</small>
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div
          className=" custom-flex d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="test">
            
            <h2 className="testimonial-center">
              Need Anything Ask Us 
            </h2>
            <hr></hr>
            <h3 className="testimonial-center"> Ask  Your Queries</h3>
            <Form onSubmit={handlesubmit} className="form" data-aos="fade-up">
              <Form.Group className="mb-3" controlId="exampleForm.ControlName">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter a Name"
                  maxLength={40}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlPhone">
                <Form.Control
                  type="tel"
                  name="phone"
                  pattern="\d{10}"
                  maxLength={10}
                  placeholder="Enter a Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter a Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="msg"
                  value={formData.msg}
                  placeholder="Enter your Queries"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <div className="button-contact-form">
                <Button variant="success" className="contat-from" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
 )
}
export default About;