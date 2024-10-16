// About.js
import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
        Welcome to our company! We are dedicated to providing the best services and products 
        to our customers. Our team is passionate, experienced, and ready to meet your needs.
      </p>
      <p style={styles.paragraph}>
        Our mission is to deliver high-quality solutions that exceed expectations. With years 
        of experience in the industry, we take pride in our work and are committed to 
        continuous improvement and innovation.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
};

export default About;
