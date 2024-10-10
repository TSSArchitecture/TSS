import React, { Fragment } from 'react';
import { useDispatch,  } from 'react-redux';
import {setVerifyState} from '../../actions/verification';
import {setBlogReadState} from '../../actions/blogRead';
import {setBookingState, } from '../../actions/booking';
import {VerificationImg} from '../../styled/Verification/Verification';
import correct from '../../img/correct.png';


const VerificationIcon = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      {/* <a style={styles.whatsapp} href="https://wa.me/2348036096802"  rel="noreferrer" target="_blank">
        
      </a> */}
      <VerificationImg onClick={() => {
        dispatch(setBlogReadState(false));
        dispatch(setBookingState(false));
        dispatch(setVerifyState(true));
      }}  alt='tss' title='tss Verify Staff' src={correct} />
    </Fragment>
  );
};

export default VerificationIcon;