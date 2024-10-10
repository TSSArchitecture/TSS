import React from 'react';
import { WhyUsBanner, WhyUsCover } from '../../styled/HomeBanner/WhyUsBanner';


const WhyUs = () => {
  const styles = {
    aboutStyle : {
      fontSize: "8rem",
      color: "#616161",
      letterSpacing: "4rem"
    },
    whyWrite : {
      fontSize: "1.2rem",
      color: "#616161",
      width:"50%",
      marginLeft:"25%",
      lineHeight: "1.4",
      wordBreak: "break-word",
    },
  };

  return (
    <WhyUsCover>
      <WhyUsBanner style={styles.aboutStyle}>
        <h1 style={styles.aboutStyle}>WHY US</h1>
      </WhyUsBanner>
      <p style={styles.whyWrite}>We focus not only on aesthetics but functionality is given high
         priority. We believe in timeless and effortless feeling in the 
         final outcome.
      </p>
    </WhyUsCover>
  )
};

export default WhyUs;