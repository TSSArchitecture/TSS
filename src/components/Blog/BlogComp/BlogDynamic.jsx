import React from 'react';
import { useNavigate, } from 'react-router';
import { useSelector, } from 'react-redux';
// import details3 from '../../../img/hotel/hotel1.jpg';


const BlogDynamic = () => {
  const { retrievedCategory } = useSelector(state => state.category);
  const navigate = useNavigate();
  return (
    <div className='blog-dynamic'>

      {retrievedCategory && retrievedCategory.length > 0 ? (
        retrievedCategory.map(data => (
          <div className='namic-child' id={`${data}-id`} key={`${data.imgURL}-idd`}>
            <img className='namic-blogImg' src={data.imgURL} title='tss' alt='tss' key={`${data}-img`}/>
            <h1 className='namic-blogh1' key={`${data}-header`}>{data.blogTitle}</h1>
            <p className='namic-p' key={`${data}-shortdescript`}>{data.blogShort}</p>
            <button onClick={() => {
              navigate(`${data.blogPath}`);
            }} className='namic-butt' key={`${data}-readMore`}>Read More..</button>
          </div>
        ))
      ) : (<div className='blog-dynamic-error'>
             <p>No listing yet for selected category</p>
           </div>)}
      
      {/* <div className='namic-child'>
        <img className='namic-blogImg' src={details3} title='tss' alt='tss'/>
        <h1 className='namic-blogh1'>Fabric Care</h1>
        <p className='namic-p'>
            How did he sleep at night? How much time do you take to rest in a day? Mark happens to be a 
            project manager at a top audit firm. His job responsibilities usually 
            would not avail him time to carry out home duties prope...
          </p>
          <button className='namic-butt'>Read More..</button>
      </div> */}

    </div>
  )
};

export default BlogDynamic;