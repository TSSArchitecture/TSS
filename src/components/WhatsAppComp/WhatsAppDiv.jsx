import React, { Fragment } from 'react';
import {WhatsAppImg} from '../../styled/Whatsapp/Whatsapp';
import whatsAppIcon from '../../img/whatsapp.png';


const WhatsAppIcon = () => {
  return (
    <Fragment>
      {/* <a style={styles.whatsapp} href="https://wa.me/2348036096802"  rel="noreferrer" target="_blank">
        
      </a> */}
      <WhatsAppImg onClick={() => {
          window.location.href = 'https://wa.me/2347032225466';
        }}  alt='tss' title='tss WhatsApp' src={whatsAppIcon}/>
    </Fragment>
  );
};

export default WhatsAppIcon;