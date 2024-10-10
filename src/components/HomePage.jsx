// First Deployment.
import React, {Fragment, Suspense, lazy} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { HomePage } from '../styled/HomePage';
import { DashBoard } from '../styled/DashBoard';
import { Header } from '../styled/Header/Header';
import HeaderLogoComp from './HomeHeaderComp/HeaderLogoComp';
import HeaderMenuComp from './HomeHeaderComp/HeaderMenuComp';
import HeaderMenuBarComp from './HomeHeaderComp/HeaderMenuBarComp';
import Slider from './HomeBanner/Slider';
import loader from '../img/loader.png';
import WhatsAppIcon from './WhatsAppComp/WhatsAppDiv';
import VerificationIcon from './VerificationComp/VerificationDiv';
import BookingIcon from './BookingComp/BookingDiv';
import BookingIcon2 from './BookingComp/BookingDiv2';
import VerificationModal from './VerificationComp/VerificationModal';
// import BookingModal from './BookingComp/BookingModal';
import { CommitmentSlash, CommitmentSlash2 } from '../styled/About/AboutBanner';
import { setProjectOneState, setProjectTwoState,
         setShowRoomOneState, setShowRoomTwoState, } from '../actions/allCSS';

const AboutTSS = lazy(() => import('./HomeBanner/AboutTSS'));
const HypeBoard = lazy(() => import('./HomeBanner/HypeBoard'));
const ProjectsDropDown = lazy(() => import('./HomeHeaderComp/ProjectsDropDown'));
const ShowRoomDropDown = lazy(() => import('./HomeHeaderComp/ShowRoomDropDown'));
const Blog = lazy(() => import('./AboutUsComp/Blog'));
const Footer = lazy(() => import('./Footer/Footer'));
const Modal = lazy(() => import('./SmallScreen/modal'));
const BookingModal = lazy(() => import('./BookingComp/BookingModal'));

const Home = () => {
  const dispatch = useDispatch();
  const { projectOneState, projectTwoState, 
          showRoomOneState, showRoomTwoState} = useSelector(state => state.allCSS);
  
  const clearAllHoverMenu = () => {
    dispatch(setProjectOneState(false));   
    dispatch(setProjectTwoState(false));     
    dispatch(setShowRoomOneState(false));   
    dispatch(setShowRoomTwoState(false));
  };
  const styles = {
    commitSlash: {
      marginLeft: "7%",
      marginBottom: "1%",
      opacity:".7",
    },
    commitSlash2: {
      marginLeft: "30%",
      marginBottom: "2%",
      opacity:".7",
    },
    hTwo : {
      marginBottom: "2rem",
      width:"100%",
      textAlign:"center",
      opacity:".7",
    },
  }
  return (
   <Fragment>
     <Helmet>
     <meta charSet="utf-8" />
      <title>TSS - TRIPPLE SOLUTIONS SERVICES - tssarchitecture.com</title>
      <link rel="canonical" href="https://www.tssarchitecture.com" />
      <title>TSS | Tripple Solutions Services | – Interior Architecture Design Facility Management. -</title>
      <meta name="description" content="TSS | -Tripple Solutions Services | – Interior Architecture Design Facility Management" />
      <meta property="og:site_name" content=" TSS | Tripple Solutions Services | tssarchitecture.com" />
      <meta
        name="description"
        content="TSS | -Tripple Solutions Services | – Number One Stop Real Estate Services | Interior Architecture Design Facility Management"
      />
     </Helmet>
        {true && <VerificationModal />}
        <HomePage>
          <WhatsAppIcon />
          <VerificationIcon />
          <BookingIcon />
          <BookingIcon2 />
          <Suspense fallback={<p>Loading...</p>}>
            <BookingModal />
          </Suspense>
          <DashBoard>
            {projectOneState === false && projectTwoState === false ? '' : <Suspense fallback={loader}>
              <ProjectsDropDown />
            </Suspense>}
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
            <Suspense fallback={loader}>
              <AboutTSS />
            </Suspense>
            <Fragment><h1>Who we are</h1></Fragment>
            <CommitmentSlash  style={styles.commitSlash} />
            <CommitmentSlash2  style={styles.commitSlash2} />
            <Suspense fallback={loader}>
              <HypeBoard />
              <Fragment><h1 style={styles.hTwo}>Blog</h1></Fragment>
              <Blog />
              <Footer />
            </Suspense>
          </DashBoard>
      </HomePage>
   </Fragment>
  )
};


export default Home;
