import React from 'react';
import { setProjectOneState, setProjectTwoState } from '../../actions/allCSS';
import { setShowRoomOneState, setShowRoomTwoState, } from '../../actions/allCSS';
import Carousel from 'nuka-carousel';
import { connect } from 'react-redux';
import background from '../CSS/Others/background.module.css';
import {SliderDiv} from '../../styled/HomeBanner/SliderDiv';
import img2 from '../../img/home7.jpg';
import img3 from '../../img/home6.jpg';
import img4 from '../../img/home8.jpg';
import img5 from '../../img/home3.jpg';
import img6 from '../../img/home4.jpg';
import img7 from '../../img/home5.jpg';
import img8 from '../../img/arrowLeft.png';
import img9 from '../../img/arrowRight.png';

class Slider extends React.Component{
  render() {
    const clearAllMenuState = () => {
      this.props.dispatch(setProjectOneState(false));      
      this.props.dispatch(setProjectTwoState(false)); 
      this.props.dispatch(setShowRoomOneState(false));      
      this.props.dispatch(setShowRoomTwoState(false)); 
    };
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
    };
    return (
      <SliderDiv onMouseEnter={clearAllMenuState}>
        <Carousel autoplay={true} wrapAround={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <button style={styles.buttonStyle} onClick={previousSlide}><img src={img8} title='tss' alt='tss'/></button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button style={styles.buttonStyle2} onClick={nextSlide}><img src={img9} title='tss' alt='tss' /></button>
          )}
        >
          <img className={background.background} alt='TSS' title='Triple Solutions Services' src={img2} />
          <img className={background.background} alt='TSS' title='Triple Solutions Services' src={img3} />
          <img className={background.background} alt='TSS' title='Triple Solutions Services' src={img4} />
          <img className={background.background} alt='TSS' title='Triple Solutions Services' src={img5} />
          <img className={background.background} alt='TSS' title='Triple Solutions Services' src={img6} />
          <img className={background.background} alt='TSS' title='Triple Solutions Services' src={img7} />
        </Carousel>
      </SliderDiv>
    );
  };
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Slider);