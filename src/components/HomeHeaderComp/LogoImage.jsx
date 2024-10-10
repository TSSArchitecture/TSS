import React, { Fragment } from 'react';
import { connect, } from 'react-redux';
import { setBlogStructure, setRetrievedCategory  } from '../../actions/category';
import ContentStructure from '../Blog/BlogContent/ContentStructure';
import { HeaderLogoImage, } from '../../styled/Header/HeaderLogo';
import logo from '../../img/TSSLogoorrr.png';


class LogoImage extends React.Component{
  componentDidMount (){
    const { dispatch } = this.props;
    const getBlogStructure = ContentStructure();
    dispatch(setBlogStructure(getBlogStructure));
    dispatch(setRetrievedCategory(getBlogStructure));
    window.scrollTo(0, 0);  
  };

  render(){
    return (
      <Fragment>
        <HeaderLogoImage src={logo} alt='Triple Solutions Services' title='Triple Solutions Services' />
      </Fragment>
    )
  }
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(LogoImage);