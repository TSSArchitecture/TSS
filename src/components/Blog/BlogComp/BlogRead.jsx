import React, {Fragment, lazy, Suspense, } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import {setBlogReadState} from '../../../actions/blogRead';
import Modal from 'react-modal';
// import BlogHeaderText from './BlogHeaderText';
// import BlogImage from './BlogImage';
import dummyImage from '../../../img/apartment/photo7.jpg';
import { CommitmentSlash, CommitmentSlash2 } from '../../../styled/About/AboutBanner';
import close from '../../../img/close.png';


const BlogHeaderText = lazy(() => import('./BlogHeaderText'));
const BlogReadContent = lazy(() => import('./BlogReadContent'));
 

const BlogRead = () => {
  
  const dispatch = useDispatch();
  const requestClose = () => dispatch(setBlogReadState(undefined));
  const { blogRead, } = useSelector(state => state.blog);

  const styles = {
    commitSlash: {
      marginTop: "1.1%",
      marginBottom: "1%",
      opacity:".4",
      width: "80%",
      background: "#FFC107",
      
    },
    commitSlash2: {
      marginTop: "1.1%",
      marginBottom: "1%",
      width: "80%",
      opacity:".4",
      background:"#000533",
    },
  }
  return (
    <Modal
      isOpen={blogRead}
      onRequestClose={requestClose}
      ariaHideApp={false}
      contentLabel="dot.com"
      closeTimeoutMS={400}
      className='modal'>

        <div className='blog-read'>

          <Fragment>
            <img onClick={() => {
              dispatch(setBlogReadState(undefined));
            }} className='closeModal' src={close} title='CLOSS TSS BLOG READ' 
              alt='Tripple S Solution Services || TSS || BLOG TRIPPLE S SOLUTION SERVICES' />
          </Fragment>

          <Suspense fallback={<p>Loading...</p>}>
            <BlogHeaderText 
              blogText = 'As long as you can do it really well!'
            />
          </Suspense>
    
          <img className='blogImage' src={dummyImage} alt='TSS Architecture' title='Tripple S Solution Services'/>

          <CommitmentSlash  style={styles.commitSlash} />
          <CommitmentSlash2  style={styles.commitSlash2} />

         <Suspense fallback={<p>Loading...</p>}>
          <BlogReadContent 
              para1= {`How can we see that we should uphold all standard practices of living.
                       How can we see that we should uphold all standard practices of living.
                       How can we see that we should uphold all standard practices of living.
                       How can we see that we should uphold all standard practices of living.
                       How can we see that we should uphold all standard practices of living.
                       How can we see that we should uphold all standard practices of living.
                       How can we see that we should uphold all standard practices of living.
                       How can we see that we should uphold all standard practices of living.
                       How can we see that we should uphold all standard practices of living.`
                       }
              para2 = {`We can make adjustments and categorically feature in pieces for development.
                        We can make adjustments and categorically feature in pieces for development.
                        We can make adjustments and categorically feature in pieces for development.`}
              
              para3 = {`We can make adjustments and categorically feature in pieces for development.
                        We can make adjustments and categorically feature in pieces for development.
                        We can make adjustments and categorically feature in pieces for development.`}

              para4 = {`We can make adjustments and categorically feature in pieces for development.
              We can make adjustments and categorically feature in pieces for development.
              We can make adjustments and categorically feature in pieces for development.`}

              para5 = {`How can we see that we should uphold all standard practices of living.
              How can we see that we should uphold all standard practices of living.
              How can we see that we should uphold all standard practices of living.`
              }

              para6 = {`How can we see that we should uphold all standard practices of living.
              How can we see that we should uphold all standard practices of living.
              How can we see that we should uphold all standard practices of living.`
              }
            />
         </Suspense>
        </div>

      </Modal>
  )
};


export default BlogRead;