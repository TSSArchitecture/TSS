import React from 'react';
import { ContactDiv, ContactForm, ContactInput,
  ContactInput2, ContactArrage, ContactArrage2, ContactButton} from '../../styled/Facility/Contact/ContactDiv';

const ContactServices = () => {

  const styles = {
    contactHeader: {
      marginTop: "5%",
      color: "#fff",
    },
    inputHeight: {
      height: "3rem",
      color: "#fff",
      border:"none",
      borderBottom: "1px solid #fff",
      fontWeight: "600",
      lineHeight: "1.6",
      fontSize: "1.19rem",
    },
  };

  return (
    <ContactDiv>
      <ContactForm>
        <h1 style={styles.contactHeader}>Contact Us</h1>
        <ContactArrage>
          <ContactInput style={styles.inputHeight} placeholder='Name'/> 
          <ContactInput style={styles.inputHeight} placeholder='Subject'/>
        </ContactArrage>
        <ContactArrage>
          <ContactInput style={styles.inputHeight} placeholder='Your Email'/> 
          <ContactInput style={styles.inputHeight} placeholder='Phone Number'/>
        </ContactArrage>
        <ContactArrage>
          <ContactInput2 style={styles.inputHeight} placeholder='Your Message'/> 
        </ContactArrage>
        <ContactArrage2>
          <ContactButton value='Send'/>
        </ContactArrage2>
      </ContactForm>
    </ContactDiv>
  )
};

export default ContactServices;