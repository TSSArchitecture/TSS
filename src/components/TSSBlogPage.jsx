import React, {Fragment, Suspense, lazy} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { TSSBlogDiv } from '../styled/TSSBlog';
import CatSearchDiv from '../components/Blog/BlogComp/CatSearchDiv';
import { DashBoard } from '../styled/DashBoard';
import { Header } from '../styled/Header/Header';
import HeaderLogoComp from './HomeHeaderComp/HeaderLogoComp';
import HeaderMenuComp from './HomeHeaderComp/HeaderMenuComp';
import HeaderMenuBarComp from './HomeHeaderComp/HeaderMenuBarComp';
import BlogPagination from './Blog/BlogComp/BlogPagination';
import Slider from './Slider/BlogSlider';
import loader from '../img/loader.png';
import { setProjectOneState, setProjectTwoState,
         setShowRoomOneState, setShowRoomTwoState, } from '../actions/allCSS';
// import WhatsAppIcon from './WhatsAppComp/WhatsAppDiv';
// import VerificationIcon from './VerificationComp/VerificationDiv';
// import BookingIcon from './BookingComp/BookingDiv';
// import BookingIcon2 from './BookingComp/BookingDiv2';
// import VerificationModal from './VerificationComp/VerificationModal';
// import BookingModal from './BookingComp/BookingModal';
// import BlogRead from './Blog/BlogComp/BlogRead';
// import ContentStruct from './Blog/BlogContent/ContentStruct';
// import BlogDynamic from './Blog/BlogComp/BlogDynamic';


const ProjectsDropDown = lazy(() => import('./HomeHeaderComp/ProjectsDropDown'));
const ShowRoomDropDown = lazy(() => import('./HomeHeaderComp/ShowRoomDropDown'));
// const Blog = lazy(() => import('./AboutUsComp/Blog'));
const Footer = lazy(() => import('./Footer/Footer'));
const Modal = lazy(() => import('./SmallScreen/modal'));
const BlogDynamic = lazy(() => import('./Blog/BlogComp/BlogDynamic'));
const BookingModal = lazy(() => import('./BookingComp/BookingModal'));
const VerificationModal = lazy(() => import('./VerificationComp/VerificationModal'));
const BookingIcon2 = lazy(() => import('./BookingComp/BookingDiv2'));
const BookingIcon = lazy(() => import('./BookingComp/BookingDiv'));
const VerificationIcon = lazy(() => import('./VerificationComp/VerificationDiv'));
const WhatsAppIcon = lazy(() => import('./WhatsAppComp/WhatsAppDiv'));
         


const TSSBlogPage = () => {
  const dispatch = useDispatch();
  const { projectOneState, projectTwoState, 
          showRoomOneState, showRoomTwoState} = useSelector(state => state.allCSS);
  
  const clearAllHoverMenu = () => {
    dispatch(setProjectOneState(false));   
    dispatch(setProjectTwoState(false));     
    dispatch(setShowRoomOneState(false));   
    dispatch(setShowRoomTwoState(false));
  };
 
 
  return (
    <Fragment>
      <Helmet>
      <meta charSet="utf-8" />
      <title>TSS - TRIPPLE SOLUTIONS SERVICES - tssarchitecture.com</title>
      <link rel="canonical" href="https://www.tssarchitecture.com" />
      <title>TSS | Tripple Solutions Services | – Interior Architecture Design Facility Management. -</title>
      <meta name="description" content="TSS | -Tripple Solutions Services | – Interior Architecture 
                  Design Facility Management" />
      <meta property="og:site_name" content=" TSS | Tripple Solutions Services | tssarchitecture.com" />
      <meta name="description"
            content="TSS | -Tripple Solutions Services | – Number One Stop Real Estate Services | Interior 
                     Architecture Design Facility Management"
      />
      </Helmet>
      <Fragment>
        <Suspense fallback={<p>Loading...</p>}>
          {true && <VerificationModal />}
        </Suspense>
      </Fragment>
       <TSSBlogDiv>
         {/* <BlogRead /> */}
         <Suspense fallback={<p>Loading...</p>}>
           <WhatsAppIcon />
           <VerificationIcon />
           <BookingIcon />
           <BookingIcon2 />
           <BookingModal />
         </Suspense>
         <DashBoard>
           {projectOneState === false && projectTwoState === false ? '' : <Fragment>
            <Suspense fallback={loader}>
              <ProjectsDropDown />
            </Suspense>
            </Fragment>}
           {showRoomOneState === false && showRoomTwoState === false ? '' :  <Suspense fallback={loader}>
             <ShowRoomDropDown /> 
           </Suspense>}
           <Suspense fallback={loader}>
             <Modal />
           </Suspense>
           <Header >
             <HeaderLogoComp />
             <HeaderMenuComp />
             <HeaderMenuBarComp />
           </Header>
           <Slider onMouseEnter={clearAllHoverMenu} />
           <CatSearchDiv />
           <Suspense fallback={loader}>
             {/* <Blog /> */}
             <BlogDynamic />
             <div className='blog-pagination-cover'>
               <BlogPagination />
             </div>
             <Footer />
           </Suspense>
         </DashBoard>
     </TSSBlogDiv>
  </Fragment>
  )
};


export default TSSBlogPage;