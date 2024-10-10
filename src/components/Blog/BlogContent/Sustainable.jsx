import React, {Fragment, Suspense, lazy} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { HomePage } from '../../../styled/HomePage';
import { DashBoard } from '../../../styled/DashBoard';
import { Header } from '../../../styled/Header/Header';
import HeaderLogoComp from '../../HomeHeaderComp//HeaderLogoComp';
import HeaderMenuComp from '../../HomeHeaderComp/HeaderMenuComp';
import HeaderMenuBarComp from '../../HomeHeaderComp/HeaderMenuBarComp';
import Slider from '../../Slider/BlogSlider';
import loader from '../../../img/loader.png';
import WhatsAppIcon from '../../WhatsAppComp/WhatsAppDiv';
import VerificationIcon from '../../VerificationComp//VerificationDiv';
import BookingIcon from '../../BookingComp/BookingDiv';
import BookingIcon2 from '../../BookingComp/BookingDiv2';
import VerificationModal from '../../VerificationComp/VerificationModal';
import BookingModal from '../../BookingComp/BookingModal';
import { setProjectOneState, setProjectTwoState,
         setShowRoomOneState, setShowRoomTwoState, } from '../../../actions/allCSS';
import SEOSustainable from '../BlogComp/BlogReadSEO/SEOSustainable';


const ProjectsDropDown = lazy(() => import('../../HomeHeaderComp/ProjectsDropDown'));
const ShowRoomDropDown = lazy(() => import('../../HomeHeaderComp/ShowRoomDropDown'));
const Blog = lazy(() => import('../../AboutUsComp/Blog'));
const Footer = lazy(() => import('../../Footer/Footer'));
const Modal = lazy(() => import('../../SmallScreen/modal'));

const FabricCare = () => {
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
      <title>
        TSS - BOOKINGS NEAR UTAKO - TRIPPLE SOLUTIONS SERVICES - 
        www.tssarchitecture.com -
      </title>
      <link rel="canonical" href="https://www.tssarchitecture.com" />
      <title>TSS | Tripple Solutions Services 
        | – Interior Architecture Design Facility Management. -
         - HOTEL BOOKINGS NEAR UTAKO -
      </title>
      <meta name="description" content="TSS | -Tripple Solutions Services | – 
        Interior Architecture Design Facility Management - 
        HOTEL BOOKINGS NEAR UTAKO -" />
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
          <BookingModal />
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
            <SEOSustainable />
              <Blog />
              <Footer />
            </Suspense>
          </DashBoard>
      </HomePage>
   </Fragment>
  )
};


export default FabricCare;
