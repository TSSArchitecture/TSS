import React, { Suspense, lazy, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import WhatsAppIcon from './WhatsAppComp/WhatsAppDiv';
import VerificationIcon from './VerificationComp/VerificationDiv';
import { Header } from '../styled/Header/Header';
import { HomePage } from '../styled/HomePage';
import { DashBoard } from '../styled/DashBoard';
import HeaderLogoComp from './HomeHeaderComp/HeaderLogoComp';
import HeaderMenuComp from './HomeHeaderComp/HeaderMenuComp';
import HeaderMenuBarComp from './HomeHeaderComp/HeaderMenuBarComp';
import ProjectsDropDown from './HomeHeaderComp/ProjectsDropDown';
import ShowRoomDropDown from './HomeHeaderComp/ShowRoomDropDown';
import AboutUsComp from './AboutUsComp/AboutUsComp';
import AboutLatest from './AboutUsComp/AboutLatest';
import VerificationModal from './VerificationComp/VerificationModal';
import {  AboutLatestDiv, AboutLatestDiv1, } from '../styled/About/AboutBanner';
import { Linked } from '../styled/Header/HeaderMenu';
import { CommitmentSlash } from '../styled/About/AboutBanner';
import loader from '../img/loader.png';
import Footer from './Footer/Footer';


const Modal = lazy(() => import('./SmallScreen/modal'));
const BookingModal = lazy(() => import('./BookingComp/BookingModal'));


const AboutUs = () => {
  const styles = {
    storyparaa: {
      marginTop: "5%",
      lineHeight:" 1.6",
      fontWeight: "200",
      wordBreak:" break-word",
      opacity: ".9",
    },
    talkaboutdivvv: {
      width:"6.3rem",
      marginBottom: "6%",
      borderBottom: "3px solid #181C4D",
      marginTop:"10%",
      textAlign: "center",
      color:"#000000",
      lineHeight:" 1.6",
      fontWeight: "200",
      wordBreak:" break-word",
    },
    commitSlash: {
      marginLeft: "7%",
      marginBottom: "8%",
    },
  }
  const { projectOneState, projectTwoState, 
  showRoomOneState, showRoomTwoState} = useSelector(state => state.allCSS);
  return (
   <Fragment>
    {true && <VerificationModal />}
     <HomePage>
      <WhatsAppIcon />
      <VerificationIcon />
      <Suspense fallback={<p>Loading...</p>}>
        <BookingModal />
      </Suspense>
      <Suspense fallback={loader}>
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
        <Suspense fallback={<loader />}>
          <Modal />
        </Suspense>
        <DashBoard>
          {projectOneState === false && projectTwoState === false ? '' : <ProjectsDropDown />}
            {showRoomOneState === false && showRoomTwoState === false ? '' :  <ShowRoomDropDown />}
            <Header>
              <HeaderLogoComp />
              <HeaderMenuComp />
              <HeaderMenuBarComp />
            </Header>
            <AboutUsComp />
            <AboutLatestDiv>
              <AboutLatestDiv1>
                <h2>Browse our latest projects</h2>
                <p style={styles.storyparaa}>Delivering projects of all shapes and sizes 
                  we create workspaces that better the way you work. 
                </p>
                <Linked to="/interior" style={styles.talkaboutdivvv}>
                  View projects
                </Linked>
              </AboutLatestDiv1>
              <AboutLatest />
            </AboutLatestDiv>
            <CommitmentSlash style={styles.commitSlash} />
            <Footer />
        </DashBoard>
      </Suspense>
    </HomePage>
   </Fragment>
  )
};

export default AboutUs;