import React from 'react';
import { FooterDiv, FooterDivCopy, FooterDivSocial } from '../../styled/Footer/FooterDiv';


const Footer = () => {
  const styles = {
    footerState : {
      fontSize: "14px",
      color:" #000000",
      fontWeight: "400",
      opacity: ".7",
      lineHeight: "1.8",
    },
    facebookColor: {
      margin: "0px 4px",
      borderRadius: "50px",
      width: "34px",
      height: "34px",
      lineHeight: "32px",
      fontSize: "12px",
      border: "2px solid rgba(0,0,0, 0.08)",
      background:"#f4f4f4",
    },

    twitterColor: {
      margin: "0px 4px",
      borderRadius: "50px",
      width: "34px",
      height: "34px",
      lineHeight: "32px",
      fontSize: "12px",
      border: "2px solid rgba(0,0,0, 0.08)",
      color:" #00acee",
      background:"#f4f4f4",
    },

    instagramColor: {
      margin: "0px 4px",
      borderRadius: "50px",
      width: "34px",
      height: "34px",
      lineHeight: "32px",
      fontSize: "12px",
      border: "2px solid rgba(0,0,0, 0.08)",
      color:" #3f729b",
      background:"#f4f4f4",
    },

    youtubeColor: {
      margin: "0px 4px",
      borderRadius: "50px",
      width: "34px",
      height: "34px",
      lineHeight: "32px",
      fontSize: "12px",
      border: "2px solid rgba(0,0,0, 0.08)",
      color:" #3f729b",
      background:"#f4f4f4",
    },
  };
  return (
    <FooterDiv>
      <FooterDivCopy>
        <p style={styles.footerState}>©Copyright 2024 www.tssarchitecture.com. All Rights Reserved</p>
      </FooterDivCopy>
      <FooterDivSocial>
        {/* <a href='https://www.facebook.com/profile.php?id=100090081374977&mibextid=LQQJ4d' 
           target='_blank'  rel="noreferrer">
          <i style={styles.facebookColor} className="fa fa-facebook-f social-icons facebook-color"></i>
        </a> */}
        <a href='https://www.facebook.com/profile.php?id=61566639965377&mibextid=ZbWKwL' 
           target='_blank'  rel="noreferrer">
          <i style={styles.facebookColor} className="fa fa-facebook-f social-icons facebook-color"></i>
        </a>
        <a href='https://www.twitter.com/TSSinterior' 
           target='_blank'  rel="noreferrer">
          <i style={styles.twitterColor} className="fa fa-twitter social-icons twitter-color" aria-hidden="true"></i>
        </a>
        {/* <a href='https://instagram.com/triplesolutionservice?igshid=NTdlMDg3MTY=' 
           target='_blank'  rel="noreferrer">
          <i style={styles.instagramColor} className="fa fa-instagram social-icons instagram-color" aria-hidden="true"></i>
        </a> */}
         <a href='https://www.instagram.com/tssarchitecture_?igsh=MTluMGxkZzhjZWZ1bA==' 
           target='_blank'  rel="noreferrer">
          <i style={styles.instagramColor} className="fa fa-instagram social-icons instagram-color" aria-hidden="true"></i>
        </a>
        
        <a href='https://www.twitter.com/TSSinterior' 
           target='_blank'  rel="noreferrer">
          <i style={styles.youtubeColor} className="fa fa-youtube-play social-icons youtube-color" aria-hidden="true"></i>
        </a>
      </FooterDivSocial>
    </FooterDiv>
  )
};

export default Footer;