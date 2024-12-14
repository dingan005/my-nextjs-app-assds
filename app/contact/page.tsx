import React from 'react';

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>
      <p style={styles.subtitle}>We would love to hear from you! Fill out the form below or reach us directly at:</p>
      <p style={styles.contactInfo}>Email: contact@yourwebsite.com | Phone: +123 456 7890</p>

      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" style={styles.input} placeholder="Your Name" />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" style={styles.input} placeholder="Your Email" />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="message">Message:</label>
          <textarea id="message" name="message" style={styles.textarea} placeholder="Your Message"></textarea>
        </div>

        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#333',
    fontSize: '28px',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#555',
    fontSize: '16px',
    marginBottom: '20px',
  },
  contactInfo: {
    color: '#777',
    fontSize: '14px',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    textAlign: 'left',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    marginBottom: '5px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default ContactPage;
