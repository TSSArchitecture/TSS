import React, { Fragment } from 'react';
import { useDispatch,  } from 'react-redux';
import {setBookingState, } from '../../actions/booking';
import {BookingImg2} from '../../styled/Booking/Booking2';
import correct from '../../img/logo.jpg';



const BookingDiv2 = () => {
  const dispatch = useDispatch();
  return (
    <Fragment>
      {/* <a style={styles.whatsapp} href="https://wa.me/2348036096802"  rel="noreferrer" target="_blank">
        
      </a> */}
      <BookingImg2 onClick={() => {
        dispatch(setBookingState(true))
      }}  alt='tss' title='Book a Luxury' src={correct} />
    </Fragment>
  );
};

export default BookingDiv2;