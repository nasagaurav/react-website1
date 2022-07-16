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
export default function App() {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
}
