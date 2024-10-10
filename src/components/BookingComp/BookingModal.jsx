import React, {Suspense,lazy } from 'react';
import Modal from 'react-modal';
import { Link, } from 'react-router-dom';
import { useDispatch, useSelector,  } from 'react-redux';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {setBookingState, } from '../../actions/booking';
// import upcoming16 from '../../img/upcoming/upcoming16.jpg';

import photo49 from '../../img/apartment/updated/update9.JPG';
import photo50 from '../../img/new/TSSMediaAsset/NewApart/studioapart.jpg';
import movie1 from '../../img/new/TSSMediaAsset/NewApart/2Bedroomapart.mp4';
import movie2 from '../../img/new/TSSMediaAsset/NewApart/studioapart.mp4';

import photo51 from '../../img/new/TSSMediaAsset/NewApart/book1.jpg';
import photo52 from '../../img/new/TSSMediaAsset/NewApart/book2.jpg';
import photo53 from '../../img/new/TSSMediaAsset/NewApart/book3.jpg';
import photo54 from '../../img/new/TSSMediaAsset/NewApart/book4.jpg';

// import close from '../../img/close.png';

const BookingContent = lazy(() => import('./BookingContent'));


const BookingModal = () => {
  const styles = {
    galleryP : {
      textAlign: "left",
      lineHeight:"1.6",
      fontWeight: "200",
      wordBreak:"break-word",
    },
    galleryH: {
      color:"#dfd4d4",
      lineHeight:"1.6",
      fontWeight: "800",
      wordBreak:"break-word",
    },
    latest: {
      width:"65%",
    },
    galphoto: {
      width:"90%",
      height: "17rem",
    },
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 200 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
  };

  const dispatch = useDispatch();
  const closeVerifyState = () => dispatch(setBookingState(undefined));
  const { booking } = useSelector(state => state.booking);
  return (
    <Modal isOpen={booking}
      onRequestClose={closeVerifyState}
      ariaHideApp={false}
      contentLabel="tssarchitecture.com"
      closeTimeoutMS={400}
      className='join-group-modal'>
        <div className='join-group-inner34'>
            <table className='join-group-form-table'>
              <tbody>
                <tr>
                  <td className='jpft-td'></td>
                  <td className='jpft-td2'>
                    <Link onClick={() => {
                      dispatch(setBookingState(false));
                    }} to='/' className='goBackbooking'>
                      Go Back
                    </Link>
                  </td>
                </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
              </tbody>
            </table>

            <div style={styles.latest}>
              <Carousel responsive={responsive}>
                <div  style={styles.galleryP}>
                  <video style={styles.galphoto}  controls poster={photo49}>
                      <source src={movie1} type="video/mp4" />
                      <source src={movie1.ogg} type="video/ogg" />
                    </video>
                    <p>Utako, Abuja - 80k per Night - </p>
                   <h3 style={styles.galleryH}>2 Bedroom Apartment </h3>
                </div>
                <div style={styles.galleryP}>
                  <video style={styles.galphoto}  controls poster={photo50}>
                    <source src={movie2} type="video/mp4" />
                    <source src={movie2.ogg} type="video/ogg" />
                  </video>
                  <p>Utako, Abuja - 40k per Night -</p>
                  <h3 style={styles.galleryH}>Studio Apartment </h3>
                </div>
                <div style={styles.galleryP}>
                  <img style={styles.galphoto} src={photo51} title='tss' alt='tss'/>
                  <p>Abuja</p>
                  <h3 style={styles.galleryH}> </h3>
                </div>
                <div style={styles.galleryP}>
                  <img style={styles.galphoto} src={photo52} title='tss' alt='tss'/>
                  <p>Abuja</p>
                  <h3 style={styles.galleryH}> </h3>
                </div>
                <div style={styles.galleryP}>
                  <img style={styles.galphoto} src={photo53} title='tss' alt='tss'/>
                  <p>Abuja</p>
                  <h3 style={styles.galleryH}> </h3>
                </div>
                <div style={styles.galleryP}>
                  <img style={styles.galphoto} src={photo54} title='tss' alt='tss'/>
                  <p>Abuja</p>
                  <h3 style={styles.galleryH}> </h3>
                </div>
                {/* <div style={styles.galleryP}>
                  <img style={styles.galphoto} src={upcoming16} title='tss' alt='tss'/>
                  <p>Abuja</p>
                  <h3 style={styles.galleryH}> </h3>
                </div> */}
              </Carousel>
            </div>
            <Suspense fallback={<p>Loading...</p>}>
              <BookingContent />
            </Suspense>
        </div>
      </Modal>
  )
};


export default BookingModal;