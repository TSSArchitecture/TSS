import React from 'react';

const BlogHeaderText = (props) => {
  return (
    <div className='blog-header-text-div'>
      <p className='blog-header-text'>{props.blogText}</p>
    </div>
  )
};


export default BlogHeaderText;