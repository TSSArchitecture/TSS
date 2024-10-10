import React from 'react';
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';
import background from '../CSS/Others/background.module.css';
import {SliderDiv} from '../../styled/HomeBanner/SliderDiv';
import img8 from '../../img/arrowLeft.png';
import img9 from '../../img/arrowRight.png';
import bathroom1 from '../../img/showroom/bathroom1.jpg';
import bathroom2 from '../../img/showroom/bathroom2.jpg';
import bathroom3 from '../../img/showroom/bathroom3.jpg';
import bathroom4 from '../../img/showroom/bathroom4.jpg';

class ShowRoomSlider extends React.Component{
  render() {
    const styles = {
      buttonStyle : {
        paddingLeft: "0.8rem",
        paddingRight: "0.8rem",
        paddingTop: "1.1rem",
        paddingBottom: "0.8rem",
        borderStyle:"none",
        background:"#fff",
        borderRadius: "14px",
      },
      buttonStyle2 : {
        paddingLeft: "0.8rem",
        paddingRight: "0.8rem",
        paddingTop: "0.9rem",
        paddingBottom: "0.8rem",
        borderStyle:"none",
        background:"#fff",
        borderRadius: "14px",
      },
      slider: {
        marginBottom: "5rem",
      },
    };
    return (
      <SliderDiv style={styles.slider}>
        <Carousel autoplay={true} wrapAround={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <button style={styles.buttonStyle} onClick={previousSlide}><img src={img8} title='tss' alt='tss'/></button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button style={styles.buttonStyle2} onClick={nextSlide}><img src={img9} title='tss' alt='tss' /></button>
          )}
        >
          <img className={background.background} alt='TSS' title='Triple Solutions Services'
           src={bathroom4} />
          <img className={background.background}
            alt='TSS' title='Triple Solutions Services' src={bathroom1} />
          <img className={background.background}
            alt='TSS' title='Triple Solutions Services' src={bathroom2} />
          <img className={background.background}
            alt='TSS' title='Triple Solutions Services' src={bathroom3} />
        </Carousel>
      </SliderDiv>
    );
  };
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ShowRoomSlider);