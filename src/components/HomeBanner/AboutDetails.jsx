import React from 'react';
import { AboutDetailsDiv } from '../../styled/HomeBanner/AboutDetailsDiv';
import { AboutDetailDiv1  } from '../../styled/HomeBanner/AboutDetailDiv1';
import { AboutDetailDiv2  } from '../../styled/HomeBanner/AboutDetailDiv2';
import logo from '../../img/logo.jpg';

const AboutDetails = () => {

  const styles = {
    readButton : {
      width:"40%",
      padding: "1rem",
      borderStyle:"none",
      marginTop: "6%",
      border: "1px solid #000",
    },

    statement : {
      color:"#000",
      fontSize: "1.1rem",
      opacity: ".78",
      lineHeight: "1.4",
      fontWeight: "200",
      wordBreak: "break-word",
    },

    say: {
      fontWeight: "bold",
    },

    imgStyle: {
      width:"100%",
      height: "100%"
    },
  };
  return (
    <AboutDetailsDiv>
      <AboutDetailDiv1>
        <h1>Designing <span>Dreams</span></h1>
        <p style={styles.statement}>
          <span style={styles.say}>Triple Solutions Services</span>, popularly known as 
          <span style={styles.say}> TSS</span>, began as a very modest interior firm. Gradually 
          with time and every project accomplished, TSS evolved from an exclusive interior 
          design firm to a civil and architectural planning firm and attained the position as one of the 
          respectable and admired firms of Nigeria.</p>
        <button style={styles.readButton}>Read More</button>   
      </AboutDetailDiv1>
  
      <AboutDetailDiv2>
        <img style={styles.imgStyle} src={logo} alt='TSS' title='Tripple Service Solution'/>
      </AboutDetailDiv2>
    </AboutDetailsDiv>
  )
};

export default AboutDetails;