import React, {Fragment} from 'react';

const BlogReadContent = (props) => {
  return (
    <div className='blog-read-content'>
      <p className='blog-para-style'>{props.para1}</p>
      <p className='blog-para-style'>{props.para2}</p>
      <Fragment>
        {props.adsTwo}
      </Fragment>
      <Fragment>
        {props.ads}
      </Fragment>
      <p className='blog-para-style'>{props.para3}</p>
      <p className='blog-para-style'>{props.para4}</p>
      <p className='blog-para-style'>{props.para5}</p>
      <p className='blog-para-style'>{props.para6}</p>
    </div>
  )
};


export default BlogReadContent;