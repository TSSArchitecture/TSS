import React, {Suspense, lazy, Fragment} from 'react';
import { useSelector } from 'react-redux';
import { HomePage } from '../../styled/HomePage';
import { DashBoard } from '../../styled/DashBoard';
import { Header } from '../../styled/Header/Header';
import HeaderLogoComp from '../HomeHeaderComp/HeaderLogoComp';
import HeaderMenuComp from '../HomeHeaderComp/HeaderMenuComp';
import HeaderMenuBarComp from '../HomeHeaderComp/HeaderMenuBarComp';
import ProjectsDropDown from '../HomeHeaderComp/ProjectsDropDown';
import ShowRoomDropDown from '../HomeHeaderComp/ShowRoomDropDown';
import FacilityFirst from './FacilityFirst';
import FacilityPay from './FacilityPay';
import FacilityServices from './FacilityServices';
import PlanPrice from './PricePlan';
import ContactServices from './ContactServices';
import Footer from '../Footer/Footer';
import WhatsAppIcon from '../WhatsAppComp/WhatsAppDiv';
import VerificationDiv from '../VerificationComp/VerificationDiv';
import ModalFacilities from './ModalFacilities';
import VerificationModal from '../VerificationComp/VerificationModal';

const Modal = lazy(() => import('../SmallScreen/modal'));
const BookingModal = lazy(() => import('../BookingComp/BookingModal'));


const Facility = () => {
  const { projectOneState, projectTwoState, 
    showRoomOneState, showRoomTwoState} = useSelector(state => state.allCSS);
  return (
    <Fragment>
      {true && <VerificationModal />}
      <HomePage>
        <WhatsAppIcon />
        <VerificationDiv />
        <ModalFacilities />
        <Suspense fallback={<p>Loading...</p>}>
          <BookingModal />
        </Suspense>
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
          <FacilityFirst />
          <FacilityPay />
          <FacilityServices />
          <PlanPrice />
          <ContactServices />
          <Footer />
        </DashBoard>
      </HomePage>
    </Fragment>
  )
};

export default Facility;

