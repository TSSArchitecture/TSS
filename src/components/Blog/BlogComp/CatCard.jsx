import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const CatCardDiv = (props) => {
  return (
    <Fragment>
      <Link to='#' className='blog-touch-cat'>{props.category}</Link>
    </Fragment>
  )
};

export default CatCardDiv;