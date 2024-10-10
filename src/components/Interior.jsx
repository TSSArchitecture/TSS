import React, {Fragment, Suspense, lazy} from 'react';
import { useSelector } from 'react-redux';
// import { history } from '../routers/AppRouter';
// import paths from '../helpers/paths';
import { Helmet } from 'react-helmet';
import { HomePage } from '../styled/HomePage';
import { DashBoard } from '../styled/DashBoard';
import { Header } from '../styled/Header/Header';
import HeaderLogoComp from './HomeHeaderComp/HeaderLogoComp';
import HeaderMenuComp from './HomeHeaderComp/HeaderMenuComp';
import HeaderMenuBarComp from './HomeHeaderComp/HeaderMenuBarComp';
import ProjectsDropDown from './HomeHeaderComp/ProjectsDropDown';
import ShowRoomDropDown from './HomeHeaderComp/ShowRoomDropDown';
import  InteriorComp  from './InteriorComp/InteriorComp';
import  Footer from './Footer/Footer';
import loader from '../img/loader.png';
import WhatsAppIcon from './WhatsAppComp/WhatsAppDiv';
import VerificationIcon from './VerificationComp/VerificationDiv';
import VerificationModal from './VerificationComp/VerificationModal';
import BookingIcon from './BookingComp/BookingDiv';
import BookingIcon2 from './BookingComp/BookingDiv2';
import BookingModal from './BookingComp/BookingModal';

const Modal = lazy(() => import('./SmallScreen/modal'));

const Interior = () => {
  const { projectOneState, projectTwoState, 
    showRoomOneState, showRoomTwoState} = useSelector(state => state.allCSS);
  const styles = {
    headerInterior: {
      height: "10rem",
    },
  };
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>TSS - TRIPPLE SOLUTIONS SERVICES</title>
        <link rel="canonical" href="https://www.tssarchitecture.com" />
        <title>TSS | Tripple Solutions Services | – Interior Architecture Design Facility Management. -</title>
        <meta name="description" content="TSS | -Tripple Solutions Services | – Interior Architecture Design Facility Management" />
        <meta property="og:site_name" content=" TSS | Tripple Solutions Services" />
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
        <Suspense fallback={<loader />}>
          <Modal />
        </Suspense>
        <Suspense fallback={loader}>
          <DashBoard>
            {projectOneState === false && projectTwoState === false ? '' : <ProjectsDropDown />}
            {showRoomOneState === false && showRoomTwoState === false ? '' :  <ShowRoomDropDown />}
            <div style={styles.headerInterior}>
              <Header>
                <HeaderLogoComp />
                <HeaderMenuComp />
                <HeaderMenuBarComp />
              </Header>
            </div>
            <InteriorComp />
            <Footer />
          </DashBoard>
        </Suspense>
      </HomePage>

    </Fragment>
  )
};


export default Interior;