import React, { Fragment } from 'react';
import { AboutBannerDiv2, AboutBannerDiv21, AboutBannerDiv22,
       } from '../../styled/About/AboutBanner';
import { Linked } from '../../styled/Header/HeaderMenu';
import photo from '../../img/ceo.jpeg';

const AboutTSS = () => {
  const styles = {
    abtColor: {
      color: "#000000",
      marginTop: "12%",
      opacity: ".7",
    },
    abt2para: {
      color: "#000000",
      marginBottom: "2%",
      paddingRight:"10%",
      fontSize: "18px",
      lineHeight: "1.5",
    },
    talkaboutdiv: {
      width:"8rem",
      borderBottom: "3px solid #181C4D",
      marginBottom: "10%",
      textAlign: "center",
      color:"#000000",
      fontWeight: "200",
      fontSize: "14px",
      wordBreak:" break-word",
      lineHeight: "1.5",
    },
    imgTss: {
      width:"100%",
      height: "40rem",
    }, 
  };
  return (
    <Fragment>
     <AboutBannerDiv2>
        <AboutBannerDiv21>
          <h1 style={styles.abtColor}>THINK TSS</h1>
          <p style={styles.abt2para}>As a leading global workspace design and delivery organisation, we use our expertise
            in workplace strategy, design and delivery to transform the way people work.
          </p>
          <p style={styles.abt2para}>Our global team of workplace strategists, interior designers, 
            sustainability experts,
            fit out and refurbishment specialists are united by their motivation to innovate across
            all aspects of our integrated capabilities, delivering future-proof work environments that
            enhance the success of individuals and business objectives.
          </p>
          <Linked to="/interior" style={styles.talkaboutdiv}>
            View our projects
          </Linked>
        </AboutBannerDiv21>


          <AboutBannerDiv22>
            <img style={styles.imgTss} src={photo} alt='tssarchitecture.com' title='tssarchitecture.com'/>
          </AboutBannerDiv22>
        </AboutBannerDiv2>
    </Fragment>
  )
};


export default AboutTSS;