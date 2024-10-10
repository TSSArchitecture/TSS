import React from 'react';
import {Firstdiv, Firstdiv1, Firstdiv2} from '../../styled/Facility/Starter/StarterDiv';
import Slider from '../HomeBanner/Slider';
import hover from "../CSS/Others/hover.module.css";


const FacilityFirst = () => {
  const style = {
    para : {
      marginTop: '4%',
      lineHeight:" 1.6",
      fontWeight: "200",
      wordBreak:" break-word",
    },
    butt: {
      marginTop: '4%',
      width: "55%",
      padding: "0.65rem",
      fontWeight: "500",
      background: "#FFD700",
      color: "#000",
      border: "none",
      borderRadius: "14px",
    },
  };
  return (
    <Firstdiv>
      <Firstdiv1>
        <h2>Price Friendly & Trusted Maintenance Services</h2>
        <p style={style.para}>We take pride in delivering high quality value for all expectation. We are 
          driven by a fore-most desire targeted at delivering choice property to our Client in quick time.
          We offer affordable schemes; maintenance practices niched to suit every budget on the go.
        </p>
        <button className={hover.hover} style={style.butt}>
          Reach Now
        </button>
      </Firstdiv1>

      <Firstdiv2>
        <Slider />
      </Firstdiv2>

    </Firstdiv>
  )
};

export default FacilityFirst;