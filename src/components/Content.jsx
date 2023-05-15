import React from 'react';
import Card from './Card';

export default function Content() {
  return (
    <div className="content">
      <h2>We combine logic, creativity and curiosity to build, solve, and create.</h2>
      <h3>Industry expertise</h3>
      <p>
        Your industry is on the move. We understand where it’s going. We align your technology solutions to meet or exceed industry benchmarks, optimize service levels, and generate more operational efficiencies to meet competitive pressures and capture more opportunities.
      </p>
      <div className="card-container">
        <Card
          title="Web Development"
          description="We build responsive and engaging web applications using modern technologies such as React and Node.js."
          image="https://img.freepik.com/free-vector/web-development-landing-page_52683-10432.jpg?w=740&t=st=1684133945~exp=1684134545~hmac=619b35a81e0cbdba70a98a5c0eedb22f6b84406d950498b49733874e465dc4bd" />
        <Card
          title="Mobile App Development"
          description="We create beautiful and intuitive mobile apps for both iOS and Android using Swift, Kotlin, and React Native."
          image="https://img.freepik.com/free-vector/purple-themed-mobile-phone-surrounded-by-colorful-apps_52683-23827.jpg?w=740&t=st=1684134064~exp=1684134664~hmac=0955382e9ef479309ab7584a18272c34df72973ac3c27f1585b29b00087a10d0" />
        <Card
          title="Banking Solutions"
          description="We provide custom software solutions for the banking industry, including core banking systems and mobile banking apps."
          image="https://img.freepik.com/free-photo/cryptocurrency-concept-with-coin_23-2149153412.jpg?w=996&t=st=1684134111~exp=1684134711~hmac=ebe5dd26881e97939d08e034a0482a0426c408ad1f9dcef6d0967a35064fb826"/>
      </div>
    </div>
  );
}
