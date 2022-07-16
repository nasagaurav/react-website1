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
  return <div>services</div>;
}
function Team() {
  return <div>team</div>;
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
