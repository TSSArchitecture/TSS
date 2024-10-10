import React, { Fragment } from 'react';
import { ContactDiv, ContactTable, ContactForm,
    ContactTextArea, ContactButton, } from '../../styled/Contact/ContactDiv';
import brand from '../../components/CSS/Others/brand.module.css';
// import brand2 from '../../components/CSS/Others/brand2.module.css';


const Contact = () => {
  const styles = {
    contact__first: {
      textAlign:"left",
      padding: "3%",
      marginLeft:"4%",
      width:"40%",
    },
    contact__second: {
      textAlign:"left",
      padding: "3%",
      marginLeft:"4%",
      width:"100%",
    },
    subtle_text: {
      fontSize: "1.9rem",
      margin:"2% 0%",
      color: "#181C4D",
    },
    subtle_text1: {
      fontSize: "1.5rem",
      margin:"2% 2%",
    },
    subtle_text2 : {
      fontSize: '0.92rem',
      margin:"2% 2%",
    },
    contact_icon: {
      color:"#868282",
    },
    contactText: {
      borderStyle: "none",
      height: "4rem",
      width: "95%",
      marginLeft:"2%",
      marginRight:"2%",
    },
    contactTextArea: {
      width: "93%",
      marginLeft:"2%",
      marginRight:"2%",
    },  
  };
  return (
    <Fragment>
      <ContactDiv>
        <ContactTable>
          <tbody>
            <tr>
              <td style={styles.contact__first}>
                <a href="tel:07032225466" target='_blank'  rel="noreferrer">
                  <i className={`material-icons ${brand.brand}`}>call</i>
                </a>
              </td>
              <td style={styles.contact__second}>
                <p style={styles.subtle_text1}>Reach Out</p>
                <p style={styles.subtle_text2}>08110942946</p>
                <p style={styles.subtle_text2}>07032225466</p>
              </td>
            </tr>
            <tr>
              <td style={styles.contact__first}><i style={styles.contactIcon} 
                  className={`material-icons ${brand.brand}`}>mail_outline</i></td>
              <td style={styles.contact__second}>
                <p style={styles.subtle_text1}>Mail Us</p>
                <p style={styles.subtle_text2}>tripplessolutionsservices@gmail.com</p>
              </td>
            </tr>
            <tr>
              <td style={styles.contact__first}><i className={`material-icons ${brand.brand}`}>add_location</i></td>
              <td style={styles.contact__second}>
                <p style={styles.subtle_text1}>Our Centre</p>
                <p style={styles.subtle_text2}>8A, Thaba-Iseka Street, British Village, Wuse 2,
                Abuja, Nigeria.</p>
              </td>
            </tr>
            <tr>
              <td style={styles.contact__first}><i className={`material-icons ${brand.brand}`}>add_location</i></td>
              <td style={styles.contact__second}>
                <p style={styles.subtle_text1}>Other Address</p>
                <p style={styles.subtle_text2}>6, Accra Street, Wuse Zone 2,
                Abuja, Nigeria.</p>
              </td>
            </tr>
          </tbody>
        </ContactTable>
        <ContactForm>
          <p style={styles.subtle_text}>Request Information</p>
          <input type='text' style={styles.contactText} placeholder=' Your Name' id='contact_name' /><br/><br/>
          <input type='text' style={styles.contactText} placeholder=' Your Email' id='contact_email' /><br/><br/>
          <ContactTextArea style={styles.contactTextArea}  placeholder='Your Message'></ContactTextArea><br/><br/>
          <ContactButton style={styles.contact__button} type='submit' value='Send Enquiry' />
        </ContactForm>
      </ContactDiv>
    </Fragment>
  )
};

export default Contact;