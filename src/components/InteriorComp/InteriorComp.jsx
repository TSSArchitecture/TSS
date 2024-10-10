import React, { Fragment,lazy, Suspense, } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigate } from 'react-router';
import FadeIn from 'react-fade-in';
import { ProjectSubHead, ProjectGallery, 
  ProjectGallery1, ProjectGallery2, ProjectListWrapper,
  ProjectLists,} from '../../styled/Interior/ProjectSubHead';
import { Linked } from '../../styled/Header/HeaderMenu';
import { setInteriorAllState, setInteriorArchiState, setInteriorIntState,
         setInteriorUrbanState, setPrivateResidenceState,
         setApartmentState, setUpcomingState, setDetailState,
         setPopceilingState, setWallpanelState, setWallframeState, 
         setWorkspaceState, setCommercialState, setHospitalityState, 
         setHospitalState } from '../../actions/allCSS';
         
import interior from '../CSS/Others/interior.module.css';
import loader from '../../img/loader.png';
import photo1 from '../../img/home1.jpg';
import photo2 from '../../img/home2.jpg';
import photo3 from '../../img/home9.jpg';

import photo49 from '../../img/apartment/updated/update9.JPG';
import movie1 from '../../img/apartment/updated/update4.MP4';


const WorkSpace1 = lazy(() => import('./WorkSpace1'));
const WorkSpace2 = lazy(() => import('./WorkSpace2'));
const InteriorInt1 = lazy(() => import('./InteriorInt1'));
const InteriorInt2 = lazy(() => import('./InteriorInt2'));
const Upcoming1 = lazy(() => import('./Upcoming1'));
const Upcoming2 = lazy(() => import('./Upcoming2'));
const InteriorUrban1 = lazy(() => import('./InteriorUrban1'));
const InteriorUrban2 = lazy(() => import('./InteriorUrban2'));
const PrivateResidence1 = lazy(() => import('./PrivateResidence'));
const PrivateResidence2 = lazy(() => import('./PrivateResidence2'));
const InteriorArchi1 = lazy(() => import('./InteriorArchi1'));
const InteriorArchi2 = lazy(() => import('./InteriorArchi2'));
const Apartment1 = lazy(() => import('./Apartment1'));
const Apartment2 = lazy(() => import('./Apartment2'));
const Details1 = lazy(() => import('./Details1'));
const Details2 = lazy(() => import('./Details2'));
const PopCeiling1 = lazy(() => import('./PopCeil1'));
const PopCeiling2 = lazy(() => import('./PopCeiling2'));
const WallPanel1 = lazy(() => import('./WallPanel'));
const WallPanel2 = lazy(() => import('./WallPanel2'));
const WallFrame1 = lazy(() => import('./WallFrame1'));
const WallFrame2 = lazy(() => import('./WallFrame2'));
const Hospitality1 = lazy(() => import('./Hospitality1'));
const Hospitality2 = lazy(() => import('./Hospitality2'));
const Commercial1 = lazy(() => import('./Commercial1'));
const Commercial2 = lazy(() => import('./Commercial2'));
const HealthCare01 = lazy(() => import('./HealthCare01'));
const HealthCare2 = lazy(() => import('./HealthCare2'));

const InteriorComp = () => {

  const styles = {
    galleryP : {
      textAlign: "left",
      lineHeight:" 1.6",
      wordBreak:" break-word",
      color:"#616161",
      marginLeft: "4%",
      marginRight: "4%",
      fontSize: "0.66rem",
    },
    header: {
      color:"#616161",
      lineHeight:" 1.6",
      wordBreak:" break-word",
      marginLeft: "4%",
      marginRight: "4%",
      marginBottom: "0%",
    },
    glimpsePhoto : {
      width:"95%",
      height: "30em",
      margin: "2%",
    },
    linkup: {
      textDecoration: "none",
      color: "#000",
    },
    linkup2: {
      textDecoration: "none",
      color: "#000",
      fontSize: "0.49rem",
    },
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAllInterior = () => {
    dispatch(setInteriorAllState(true));      
    dispatch(setInteriorArchiState(true)); 
    dispatch(setInteriorIntState(true));
    dispatch(setInteriorUrbanState(true));
    dispatch(setApartmentState(true));
    dispatch(setPrivateResidenceState(true));
    dispatch(setPopceilingState(true));
    dispatch(setWallpanelState(true));
    dispatch(setWallframeState(true));
    dispatch(setWorkspaceState(true));
    dispatch(setCommercialState(true));
    dispatch(setHospitalityState(true));
    dispatch(setHospitalState(true));
    dispatch(setDetailState(false));
  };

  const handleInteriorInt = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorArchiState(false)); 
    dispatch(setInteriorIntState(true));
    dispatch(setInteriorUrbanState(false));
    dispatch(setApartmentState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setUpcomingState(false));
    dispatch(setDetailState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallframeState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(false));
    dispatch(setWallpanelState(false));
  };

  const handleInteriorUrb = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorArchiState(false)); 
    dispatch(setInteriorIntState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setApartmentState(false));
    dispatch(setInteriorUrbanState(true));
    dispatch(setUpcomingState(false));
    dispatch(setDetailState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallframeState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(false));
    dispatch(setWallpanelState(false));
  };

  const handleInteriorPr = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorArchiState(false)); 
    dispatch(setInteriorIntState(false));
    dispatch(setInteriorUrbanState(false));
    dispatch(setApartmentState(false));
    dispatch(setPrivateResidenceState(true));
    dispatch(setUpcomingState(false));
    dispatch(setDetailState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallframeState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(false));
    dispatch(setWallpanelState(false));
  };

  const handleInteriorArchi = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorIntState(false));
    dispatch(setInteriorUrbanState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setApartmentState(false));
    dispatch(setInteriorArchiState(true));
    dispatch(setUpcomingState(false));
    dispatch(setDetailState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallframeState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(false));
    dispatch(setWallpanelState(false));
  };

  const handleInteriorApart = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorIntState(false));
    dispatch(setInteriorUrbanState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setInteriorArchiState(false));
    dispatch(setApartmentState(true));
    dispatch(setUpcomingState(false));
    dispatch(setDetailState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallframeState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(false));
    dispatch(setWallpanelState(false));
  };

  const handlePopceilingState = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorIntState(false));
    dispatch(setInteriorUrbanState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setInteriorArchiState(false));
    dispatch(setApartmentState(false));
    dispatch(setUpcomingState(false));
    dispatch(setDetailState(false));
    dispatch(setWallpanelState(false));
    dispatch(setWallframeState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(false));
    dispatch(setPopceilingState(true));
  };

  const handlewallpanelState = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorIntState(false));
    dispatch(setInteriorUrbanState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setInteriorArchiState(false));
    dispatch(setApartmentState(false));
    dispatch(setUpcomingState(false));
    dispatch(setDetailState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallframeState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(false));
    dispatch(setWallpanelState(true));
  };

  const handlewallframeState = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorIntState(false));
    dispatch(setInteriorUrbanState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setInteriorArchiState(false));
    dispatch(setApartmentState(false));
    dispatch(setUpcomingState(false));
    dispatch(setDetailState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallpanelState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(false));
    dispatch(setWallframeState(true));
  };

  const handlewallworkspacesState = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorIntState(false));
    dispatch(setInteriorUrbanState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setInteriorArchiState(false));
    dispatch(setApartmentState(false));
    dispatch(setUpcomingState(false));
    dispatch(setDetailState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallpanelState(false));
    dispatch(setWallframeState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(false));
    dispatch(setWorkspaceState(true));
  };

  const handlecommercialState = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorIntState(false));
    dispatch(setInteriorUrbanState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setInteriorArchiState(false));
    dispatch(setApartmentState(false));
    dispatch(setUpcomingState(false));
    dispatch(setDetailState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallpanelState(false));
    dispatch(setWallframeState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(false));
    dispatch(setCommercialState(true));
  };

  const handlehospitalityState = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorIntState(false));
    dispatch(setInteriorUrbanState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setInteriorArchiState(false));
    dispatch(setApartmentState(false));
    dispatch(setUpcomingState(false));
    dispatch(setDetailState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallpanelState(false));
    dispatch(setWallframeState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalState(false));
    dispatch(setHospitalityState(true));
  };

  const handlehospitalState = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorIntState(false));
    dispatch(setInteriorUrbanState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setInteriorArchiState(false));
    dispatch(setApartmentState(false));
    dispatch(setUpcomingState(false));
    dispatch(setDetailState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallpanelState(false));
    dispatch(setWallframeState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(true));
  };


  const { interiorAll, interiorInt, interiorUrban,
          privateResidence, interiorArchi, apartment,
          upcoming, details, popceiling, wallpanel, wallframe, 
          workspace, commercial, hospitality, hospital } = useSelector(state => state.allCSS);



  return (
   <Fragment>
    <ProjectSubHead>
      <h1 style={styles.header}>{details || upcoming ? `Projects` : `Interior`}</h1>
      <p style={styles.galleryP}>
      “We want to keep all doors open as it creates wonderful opportunities to explore in the ever 
      changing world.” TSS is a diverse group of like-minded people focusing on constant development 
      of design language. Grounded in search for climate-responsive 
      and contextually appropriate solutions, we seek to identify uniqueness within each project.
      </p>
    </ProjectSubHead>
    <ProjectListWrapper>
      <ProjectLists onClick={handleAllInterior}><Linked style={styles.linkup} to="#">ALL</Linked></ProjectLists>
      <ProjectLists onClick={handleInteriorArchi}><Linked style={styles.linkup} to="#">ARCHITECTURE</Linked></ProjectLists>
      <ProjectLists onClick={handleInteriorInt}><Linked style={styles.linkup} to="#">INTERIOR</Linked></ProjectLists>
      <ProjectLists onClick={() => {
        navigate("/showroom");
      }}><Linked style={styles.linkup} to="/showroom">PRODUCT</Linked></ProjectLists>
      <ProjectLists onClick={handleInteriorUrb}><Linked style={styles.linkup} to="#">URBAN DESIGN</Linked></ProjectLists>
      <ProjectLists onClick={handlePopceilingState}><Linked style={styles.linkup} to="#">POP-CEILING</Linked></ProjectLists>
      <ProjectLists onClick={handlewallframeState}><Linked style={styles.linkup} to="#">WALL FRAME</Linked></ProjectLists>
      <ProjectLists  onClick={handlewallpanelState}><Linked style={styles.linkup} to="#">WALL PANEL</Linked></ProjectLists>
    </ProjectListWrapper>
    <ProjectListWrapper>
      <ProjectLists onClick={handleInteriorPr}><Linked style={styles.linkup2} to="#">PRIVATE RESIDENCE</Linked></ProjectLists>
      <ProjectLists onClick={handleInteriorApart}><Linked style={styles.linkup2} to="#">APARTMENT</Linked></ProjectLists>
      <ProjectLists onClick={handlewallworkspacesState}><Linked style={styles.linkup2} to="#">WORKSPACES</Linked></ProjectLists>
      <ProjectLists onClick={handlecommercialState}><Linked style={styles.linkup2} to="#">COMMERCIAL</Linked></ProjectLists>
      <ProjectLists onClick={handlehospitalState}><Linked style={styles.linkup2} to="#">HEALTH CARE</Linked></ProjectLists>
      <ProjectLists onClick={handlehospitalityState}><Linked style={styles.linkup2} to="#">HOSPITALITY</Linked></ProjectLists>
    </ProjectListWrapper>
    <ProjectGallery>
        <ProjectGallery1>
         <FadeIn delay={1000}>
           {interiorAll && (
             <Fragment>
                <img className={interior.interior}
                src={photo1} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
                <img className={interior.interior} 
                src={photo2} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
             </Fragment>
           )}
           {interiorInt && (
             <Fragment>
                <Suspense fallback={<p>Loading...</p>}>
                  <InteriorInt1 />
                </Suspense>
             </Fragment>
           )}

            {upcoming && (
             <Fragment>
                <Suspense fallback={loader}>
                  <Upcoming1 />
                </Suspense>
             </Fragment>
           )}

          {interiorUrban && (
             <Fragment>
               <Suspense fallback={loader}>
                 <InteriorUrban1 />
               </Suspense>
             </Fragment>
           )}

           {privateResidence && (
             <Fragment>
                <Suspense fallback={loader}>
                  <PrivateResidence1 />
                </Suspense>
             </Fragment>
           )}

           {interiorArchi && (
             <Fragment>
               <Suspense fallback={loader}>
                  <InteriorArchi1 />
               </Suspense>
             </Fragment>
           )}

           {apartment && (
             <Fragment>
                <Suspense fallback={loader}>
                  <video style={styles.glimpsePhoto}  controls poster={photo49}>
                    <source src={movie1} type="video/mp4" />
                    <source src={movie1.ogg} type="video/ogg" />
                  </video>
                </Suspense>
                 
                 <Suspense fallback={loader}>
                  <Apartment1 />
                 </Suspense>
             </Fragment>
           )}

           
            {details && (
             <Fragment>
               <Suspense fallback={loader}>
                 <Details1 />
               </Suspense>
             </Fragment>
           )}

            {popceiling && (
             <Fragment>
                <Suspense fallback={<p>Loading...</p>}>
                  <PopCeiling1 />
                </Suspense>
             </Fragment>
           )}

           {wallpanel && (
             <Fragment>
                <Suspense fallback={loader}>
                  <WallPanel1 />
                </Suspense>
             </Fragment>
           )}

           {wallframe && (
             <Fragment>
                <Suspense fallback={loader}>
                  <WallFrame1 />
                </Suspense>
             </Fragment>
           )}

            {workspace && (
             <Fragment>
               <Suspense fallback={<p>Loading...</p>}>
                 <WorkSpace1 />
               </Suspense>
             </Fragment>
           )}

            {commercial && (
             <Fragment>
                <Suspense fallback={loader}>
                  <Commercial1 />
                </Suspense>
             </Fragment>
           )}

            {hospital && (
             <Fragment>
               <Suspense fallback={loader}>
                 <HealthCare01 />
               </Suspense>
             </Fragment>
           )}

            {hospitality && (
             <Fragment>
              <Suspense fallback={loader}>
                <Hospitality1 />
              </Suspense>
             </Fragment>
           )}
         </FadeIn>
        </ProjectGallery1>
      <ProjectGallery2>
        <FadeIn  delay={1000}>
          {interiorAll && (
            <Fragment>
              <img style={styles.glimpsePhoto} 
              src={photo3} title='www.tssarchitecture.com' alt='www.tssarchitecture.com'/>
            </Fragment>
          )}
          {interiorInt && (
             <Fragment>
                <Suspense fallback={<p>Loading...</p>}>
                  <InteriorInt2 />
                </Suspense>
             </Fragment>
           )}

          {upcoming && (
             <Fragment>
                <Upcoming2 />
             </Fragment>
           )}

          {interiorUrban && (
             <Fragment>
                <InteriorUrban2 />
             </Fragment>
           )}

          {privateResidence && (
             <Fragment>
                <Suspense fallback={loader}>
                  <PrivateResidence2 />
                </Suspense>
             </Fragment>
           )}

           {interiorArchi && (
             <Fragment>
                <Suspense fallback={loader}>
                  <InteriorArchi2 />
                </Suspense>
             </Fragment>
           )}

           {apartment && (
             <Fragment>
              <Suspense fallback={loader}>
                  <Apartment2 />
              </Suspense>
             </Fragment>
           )}

           {details && (
             <Fragment>               
               <Suspense>
                 <Details2 />
               </Suspense>
             </Fragment>
           )}

           {popceiling && (
             <Fragment>
                <Suspense fallback={<p>Loading...</p>}>
                  <PopCeiling2 />
                </Suspense>
             </Fragment>
           )}

            {wallpanel && (
             <Fragment>
                <Suspense fallback={loader}>
                  <WallPanel2 />
                </Suspense>
             </Fragment>
           )}

            {wallframe && (
             <Fragment>
                <Suspense fallback={loader}>
                  <WallFrame2 />
                </Suspense>
             </Fragment>
           )}

            {workspace && (
             <Fragment>
               <Suspense fallback={<p>Loading...</p>}>
                 <WorkSpace2 />
               </Suspense>
             </Fragment>
           )}

            {commercial && (
             <Fragment>
                <Suspense fallback={loader}>
                  <Commercial2 />
                </Suspense>
             </Fragment>
           )}

            {hospital && (
             <Fragment>
                <Suspense fallback={loader}>
                  <HealthCare2 />
                </Suspense>
             </Fragment>
           )}

            {hospitality && (
             <Fragment>
               <Suspense fallback={loader}>
                 <Hospitality2 />
               </Suspense>
             </Fragment>
           )}
        </FadeIn>
      </ProjectGallery2>
    </ProjectGallery>
   </Fragment>
  )
};


export default InteriorComp;