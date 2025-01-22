import "../Styles/Instructor-Info.css";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import Login from "./LoginPage.jsx";
import React, { useState } from "react";
import Header from "../header.jsx";
import Footer from "../footer.jsx";

function Instructor() {
  const [emailSuccess, setEmailSucceess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    to: "",
    subject: "",
    message: "",
  });

  const inputs = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function sendEmail(e) {
    e.preventDefault();
    if (Object.values(formData).every((value) => value.trim() !== "")) {
      setEmailSucceess(!emailSuccess);
      setFormData({ name: "", to: "", subject: "", message: "" });
    }
  }

  const [mailField, setMailField] = useState({ mail: "" });
  const [buttonSelect, setButtonSelect] = useState("");

  const passMail = (mailValue) => {
    setButtonSelect(mailValue);
    setFormData({ ...formData, to: mailValue });
    setMailField({ ...mailField, mail: mailValue });
  };

  const mailUpdate = (e) => {
    const { name, value } = e.target;
    setMailField({ ...mailField, [name]: value });
  };

  const mailFieldWork = (e) => {
    inputs(e);
    mailUpdate(e);
  };

  return (
    <>
      <Header />
      <div className="container-box">
        <div className="instructor-contact-box">
          <h1>Instructor Contact List</h1>

          <div className="heading">
            <p>Name</p>
            <p>Course</p>
            <p>Office Hours</p>
            <div className="contact-box">
              <p>Contact</p>
            </div>
          </div>

          <div className="i-content">
            <p>Name</p>
            <p>DCIT201</p>
            <p>2:00am - 2:00pm</p>
            <div className="contact-box">
              <img src={phone} alt="PHONE" width={42.5} />
              <div className="info-tip">0123 456 789</div>
              <a href="#email" onClick={() => passMail("name1@gmail.com")}>
                <img src={mail} alt="MAIL" width={50} />
                <div className="info-tip mail">name1@gmail.com</div>
              </a>
            </div>
          </div>

          <div className="i-content">
            <p>Name</p>
            <p>DCIT201</p>
            <p>2:00am - 2:00pm</p>
            <div className="contact-box">
              <img src={phone} alt="PHONE" width={42.5} />
              <div className="info-tip">0123 456 789</div>
              <a href="#email" onClick={() => passMail("name2@gmail.com")}>
                <img src={mail} alt="MAIL" width={50} />
                <div className="info-tip mail">name2@gmail.com</div>
              </a>
            </div>
          </div>

          <div className="i-content">
            <p>Name</p>
            <p>DCIT201</p>
            <p>2:00am - 2:00pm</p>
            <div className="contact-box">
              <img src={phone} alt="PHONE" width={42.5} />
              <div className="info-tip">0123 456 789</div>
              <a href="#email" onClick={() => passMail("name3@gmail.com")}>
                <img src={mail} alt="MAIL" width={50} />
                <div className="info-tip mail">name3@gmail.com</div>
              </a>
            </div>
          </div>

          <div className="i-content">
            <p>Name</p>
            <p>DCIT201</p>
            <p>2:00am - 2:00pm</p>
            <div className="contact-box">
              <img src={phone} alt="PHONE" width={42.5} />
              <div className="info-tip">0123 456 789</div>
              <a href="#email" onClick={() => passMail("name4@gmail.com")}>
                <img src={mail} alt="MAIL" width={50} />
                <div className="info-tip mail">name4@gmail.com</div>
              </a>
            </div>
          </div>

          <div className="i-content">
            <p>Name</p>
            <p>DCIT201</p>
            <p>2:00am - 2:00pm</p>
            <div className="contact-box">
              <img src={phone} alt="PHONE" width={42.5} />
              <div className="info-tip">0123 456 789</div>
              <a href="#email" onClick={() => passMail("name5@gmail.com")}>
                <img src={mail} alt="MAIL" width={50} />
                <div className="info-tip mail">name5@gmail.com</div>
              </a>
            </div>
          </div>

          <div className="i-content">
            <p>Name</p>
            <p>DCIT201</p>
            <p>2:00am - 2:00pm</p>
            <div className="contact-box">
              <img src={phone} alt="PHONE" width={42.5} />
              <div className="info-tip">0123 456 789</div>
              <a href="#email" onClick={() => passMail("name6@gmail.com")}>
                <img src={mail} alt="MAIL" width={50} />
                <div className="info-tip mail">name6@gmail.com</div>
              </a>
            </div>
          </div>
        </div>
        <div className="email-form" id="email">
          <h1>Send Email</h1>
          <form onSubmit={sendEmail}>
            <div className="first">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={inputs}
                value={formData.name}
                required
              />
              <input
                type="email"
                onChange={mailFieldWork}
                name="to"
                placeholder="To"
                value={formData.to}
                required
              />
            </div>
            <input
              type="text"
              onChange={inputs}
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              required
            />
            <textarea
              rows={10}
              cols={21}
              name="message"
              onChange={inputs}
              placeholder="Message"
              value={formData.message}
              required
            />
            <button type="submit">Send</button>
            <p className={emailSuccess ? "success show-success" : "success"}>
              Your Message Was Sent Successfully
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
//dont forget to make an email submission  simulation

export default Instructor;
