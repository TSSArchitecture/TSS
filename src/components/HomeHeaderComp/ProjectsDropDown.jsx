import React, { Fragment} from 'react';
import {  useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router';
import { ProjectsDropDownDiv, ProjectsDropDownDiv1, Linked } from '../../styled/Header/HeaderMenu';
import { setProjectOneState, setProjectTwoState } from '../../actions/allCSS';
import { setInteriorAllState, setInteriorArchiState, setInteriorIntState,
  setInteriorUrbanState, setPrivateResidenceState,
  setApartmentState, setUpcomingState, setDetailState, setPopceilingState, 
  setWallpanelState, setWallframeState, setWorkspaceState, setCommercialState,
  setHospitalityState, setHospitalState, } from '../../actions/allCSS';

const ProjectsDropDown = () => {
  
  const styles = {
    tabStyle : {
      width:"90%",
      height: "100%",
      marginLeft:"5%",
      textAlign: "left",
    },
    trStyle: {
      padding: "8rem",
    },
    tdStyle: {
      fontSize: "0.87rem",
    },
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleProjectStateOff = () => {
    dispatch(setProjectOneState(false));      
  };
  const handleProjectTwoStateOff = () => {
    dispatch(setProjectTwoState(false));      
  };

  const handleBait = () => {
    dispatch(setProjectOneState(false));      
  };

  const handleInteriorUpcoming = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorIntState(false));
    dispatch(setInteriorUrbanState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setInteriorArchiState(false));
    dispatch(setApartmentState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallpanelState(false));
    dispatch(setWallframeState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(false));
    dispatch(setUpcomingState(true));
  };

  const handleInteriorDetails = () => {
    dispatch(setInteriorAllState(false));      
    dispatch(setInteriorIntState(false));
    dispatch(setInteriorUrbanState(false));
    dispatch(setPrivateResidenceState(false));
    dispatch(setInteriorArchiState(false));
    dispatch(setApartmentState(false));
    dispatch(setUpcomingState(false));
    dispatch(setPopceilingState(false));
    dispatch(setWallpanelState(false));
    dispatch(setWallframeState(false));
    dispatch(setWorkspaceState(false));
    dispatch(setCommercialState(false));
    dispatch(setHospitalityState(false));
    dispatch(setHospitalState(false));
    dispatch(setDetailState(true));
  };

  return (
      <Fragment>
        <ProjectsDropDownDiv onMouseLeave={handleProjectStateOff}>
          
        </ProjectsDropDownDiv>
        <ProjectsDropDownDiv1 onMouseEnter={handleBait} onMouseLeave={handleProjectTwoStateOff}>
          <table style={styles.tabStyle} onMouseLeave={handleProjectTwoStateOff}>
            <tbody>
              <tr style={styles.trStyle}>
                <td>
                  <Linked to='/interior' style={styles.tdStyle} href='#'>RESIDENTIAL</Linked>
                </td>
              </tr>
              <tr  style={styles.trStyle}>
                <td>
                  <Linked to='/interior' style={styles.tdStyle} href='#'>COMMERCIAL</Linked>
                </td>
              </tr>
              <tr style={styles.trStyle}>
                <td onClick={() => {
                  handleInteriorDetails();
                  navigate("/interior");
                }}>
                  <Linked to='/interior' style={styles.tdStyle} href='#'>DETAILS</Linked>
                </td>
              </tr>
              <tr style={styles.trStyle}>
                <td onClick={() => {
                  handleInteriorUpcoming();
                  navigate("/interior");
                }}>
                  <Linked to='/interior' style={styles.tdStyle} href='#'>UPCOMING</Linked>
                </td>
              </tr>
            </tbody>
          </table>
        </ProjectsDropDownDiv1>
      </Fragment>
  )
};

export default ProjectsDropDown;