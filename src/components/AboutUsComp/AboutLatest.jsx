import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import upcoming11 from '../../img/upcoming/upcoming11.jpg';
import upcoming12 from '../../img/upcoming/upcoming12.jpg';
import upcoming13 from '../../img/upcoming/upcoming13.jpg';
import upcoming14 from '../../img/upcoming/upcoming14.jpg';
import upcoming15 from '../../img/upcoming/upcoming15.jpg';
import upcoming16 from '../../img/upcoming/upcoming16.jpg';

const AboutLatest = () => {
  const styles = {
    galleryP : {
      textAlign: "left",
      lineHeight:"1.6",
      fontWeight: "200",
      wordBreak:"break-word",
    },
    galleryH: {
      color:"#000",
      lineHeight:"1.6",
      fontWeight: "800",
      wordBreak:"break-word",
    },
    latest: {
      width:"65%",
    },
    galphoto: {
      width:"90%",
      height: "10rem",
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
  return (
      <div style={styles.latest}>
        <Carousel responsive={responsive}>
          <div style={styles.galleryP}>
            <img style={styles.galphoto} src={upcoming11} title='tss' alt='tss'/>
            <p>Lagos</p>
            <h3 style={styles.galleryH}>Eko Springs</h3>
          </div>
          <div style={styles.galleryP}>
            <img style={styles.galphoto} src={upcoming12} title='tss' alt='tss'/>
            <p>Port-Harcourt</p>
            <h3 style={styles.galleryH}>Silicon Vile</h3>
          </div>
          <div style={styles.galleryP}>
            <img style={styles.galphoto} src={upcoming13} title='tss' alt='tss'/>
            <p>Abuja</p>
            <h3 style={styles.galleryH}>Hub One</h3>
          </div>
          <div style={styles.galleryP}>
            <img style={styles.galphoto} src={upcoming14} title='tss' alt='tss'/>
            <p>Uyo</p>
            <h3 style={styles.galleryH}>Tetragon</h3>
          </div>
          <div style={styles.galleryP}>
            <img style={styles.galphoto} src={upcoming15} title='tss' alt='tss'/>
            <p>Kano</p>
            <h3 style={styles.galleryH}>Gremaine</h3>
          </div>
          <div style={styles.galleryP}>
            <img style={styles.galphoto} src={upcoming16} title='tss' alt='tss'/>
            <p>Kaduna</p>
            <h3 style={styles.galleryH}>Wavy Falls</h3>
          </div>
        </Carousel>
      </div>
  )
};

export default AboutLatest;