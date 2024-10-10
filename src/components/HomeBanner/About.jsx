import React from 'react';
import { AboutBanner } from '../../styled/HomeBanner/AboutBanner';


const About = () => {
  const styles = {
    aboutStyle : {
      fontSize: "8rem",
      color: "#616161",
      letterSpacing: "4rem",
      lineHeight: "1.4",
      wordBreak: "break-word",
    },
  };

  return (
    <AboutBanner>
      <h1 style={styles.aboutStyle}>ABOUT</h1>
    </AboutBanner>
  )
};

export default About;