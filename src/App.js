import React from 'react';
import './style.css';
function Header() {
  return (
    <header>
      <div>logoname</div>
      <div>
        <a href="">home</a>
        <a href="">about</a>
        <a href="">contact</a>
        <a href="">services</a>
      </div>
    </header>
  );
}
function About() {
  return (
    <div className="about">
      <h1>About Us </h1>
      <p>we are about us </p>
      <button>read me </button>
    </div>
  );
}
function Contact() {
  return (
    <div className="contact">
      <h1>Contact us </h1>
      <p>contact me anytime </p>
      <input placeholder="name" />
      <input placeholder="email" />
      <input placeholder="phone" />
      <input placeholder="message" />
      <button>Send Message</button>
    </div>
  );
}
function Services() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const item = (
    <div className="item">
      <i className="fa fa-home fa-5x"></i>
    </div>
  );
  return (
    <div className="services">
      <h1>services</h1>
      <p>my services all services</p>
      <div className="flex">{a.map((x) => item)}</div>
    </div>
  );
}
function Team() {
  const a = [1, 2, 3, 4];
  const item = (
    <div className="item">
      <img />
      <h3>Employee</h3>
      <h4>CEO</h4>
      <h5></h5>
      <button>
        <i className="fa fa-facebook"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-pinterest"></i>
        <i className="fa fa-linkedin"></i>
      </button>
    </div>
  );
  return (
    <div>
      <h1>team</h1>
      <p>meet the team</p>
      <div className="flex">{a.map((x) => item)}</div>
    </div>
  );
}
function Price() {
  return <div>Price</div>;
}
function Footer() {
  return <div>Footer</div>;
}
export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
      <Services />
      <Team />
      <Price />
      <Footer />
    </div>
  );
}
