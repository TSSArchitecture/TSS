import React, { Fragment } from 'react';
import { useDispatch,  } from 'react-redux';
import {setBookingState, } from '../../actions/booking';
import {setVerifyState} from '../../actions/verification';
import {setBlogReadState} from '../../actions/blogRead';
import {BookingImg} from '../../styled/Booking/Booking';
import correct from '../../img/new.png';



const BookingIcon = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      {/* <a style={styles.whatsapp} href="https://wa.me/2348036096802"  rel="noreferrer" target="_blank">
        
      </a> */}
      <BookingImg onClick={() => {
        dispatch(setBlogReadState(false));
        dispatch(setVerifyState(false));
        dispatch(setBookingState(true));
      }}  alt='tss' title='Book a Luxury' src={correct} />
    </Fragment>
  );
};

export default BookingIcon;