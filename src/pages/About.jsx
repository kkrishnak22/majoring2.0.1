import React from "react";
import CompanyInfo from '../components/CompanyInfo'

export default function About() {



  return (
    <div className="about">
      <h2 className="about-heading">About Us  </h2>
      <p className="about-content">
        <p>
          We are a team of experienced developers who are passionate about
          creating innovative solutions for businesses of all sizes. Our mission
          is to provide our clients with the highest quality software
          development services, using the latest technologies and industry best
          practices.
        </p>
        <br />
        <p>
          At our core, we believe in building strong relationships with our
          clients and working collaboratively to understand their unique needs
          and challenges. We pride ourselves on our ability to deliver custom
          solutions that are tailored to each client's specific goals and
          objectives.
        </p>
        <br />
        <p>
          Whether you're looking to build a new mobile app, develop a custom
          software platform, or enhance your existing systems, we have the
          expertise and experience to help you achieve your goals. Contact us
          today to learn more about how we can help your business succeed.
        </p>
        <br />
      </p>
      <div className="company-info-card-container">
      <CompanyInfo
        
        imgUrl="https://img.freepik.com/free-photo/goals-target-aspiration-perforated-paper-bullseye_53876-16430.jpg?w=996&t=st=1684135530~exp=1684136130~hmac=e899c4fc22e81fb888ef8c45adbb8064abc55a59b5020ba256f8e413fbcfe43e"
        imgAlt="Mission"
        title="Our Mission"
        description="Our mission is to create high-quality software solutions tailored to meet the unique needs of each client, leveraging the best practices and the latest technologies. We are committed to fostering a culture of continuous learning and development, providing internship opportunities to students, and bridging the gap between academic theory and practical education." />
      <CompanyInfo
     
        imgUrl="https://img.freepik.com/free-vector/businessman-with-binoculars_23-2147620905.jpg?w=740&t=st=1684135570~exp=1684136170~hmac=b74b956b26241d18d8515c3effa7323ab8affbaabedeab0a94758d27eb196f8b"
        imgAlt="Vision"
        title="Our Vision"
        description="To be the leading IT company that provides cutting-edge solutions to clients worldwide while promoting innovation and excellence in software development."/>
      <CompanyInfo
    
        imgUrl="https://img.freepik.com/free-photo/creative-light-bulb-abstract-glowing-blue-background-generative-ai_188544-8090.jpg?w=360&t=st=1684135646~exp=1684136246~hmac=b42c96d109a5244efe0a2eb4b6c11dd342b6c74bd79e8f4e25c781034cf07cee"
        imgAlt="Goals"
        title="Our Goals"
        description="Our goal is to become a trusted partner to our clients, delivering exceptional value and exceeding their expectations through our expertise, creativity, and commitment. We aim to attract and retain top talent, providing a challenging and rewarding work environment that fosters professional growth and personal fulfillment. "/>
      </div>
    </div>
  );
}
