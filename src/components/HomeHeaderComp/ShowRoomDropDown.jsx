import React, { Fragment} from 'react';
import {  useDispatch } from 'react-redux';
import {  useNavigate } from 'react-router';
import { ShowRoomDropDownDiv, ShowRoomDropDownDiv1, Linked } from '../../styled/Header/HeaderMenu';
import { setShowRoomOneState, setShowRoomTwoState, setFurnitureState,
         setAppliancesState, setKitchenState,setToiletriesState} from '../../actions/allCSS';
import {setBookingState, } from '../../actions/booking';

const ShowRoomDropDown = () => {
  
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
      fontSize: "0.77rem",
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleShowRoomOneStateOff = () => {
    dispatch(setShowRoomOneState(false));      
  };
  const handleShowRoomTwoStateOff = () => {
    dispatch(setShowRoomTwoState(false));      
  };

  const handleRoom = () => {
    dispatch(setShowRoomOneState(false));      
  };
  return (
      <Fragment>
        <ShowRoomDropDownDiv onMouseLeave={handleShowRoomOneStateOff}>
          
        </ShowRoomDropDownDiv>
        <ShowRoomDropDownDiv1 onMouseEnter={handleRoom} onMouseLeave={handleShowRoomTwoStateOff}>
          <table style={styles.tabStyle} onMouseLeave={handleShowRoomTwoStateOff}>
            <tbody>
              <tr style={styles.trStyle}>
                <td onClick={() => {
                  dispatch(setFurnitureState(false));
                  dispatch(setAppliancesState(false));
                  dispatch(setKitchenState(false));
                  dispatch(setToiletriesState(false));
                  navigate("/interior");
                }}>
                  <Linked to='#' style={styles.tdStyle} href='#'>PROPERTY</Linked>
                </td>
              </tr>
              <tr  style={styles.trStyle}>
                <td onClick={() => {
                  dispatch(setAppliancesState(true));
                  dispatch(setFurnitureState(false));
                  dispatch(setKitchenState(false));
                  dispatch(setToiletriesState(false));
                  navigate("/showroom");
                }}>
                  <Linked to='#' style={styles.tdStyle} href='#'>SHOP</Linked>
                </td>
              </tr>
              <tr style={styles.trStyle}>
                <td onClick={() => {
                  dispatch(setToiletriesState(true));
                  dispatch(setFurnitureState(false));
                  dispatch(setKitchenState(false));
                  dispatch(setAppliancesState(false));
                  dispatch(setBookingState(true));
                }}>
                  <Linked to='#' style={styles.tdStyle} href='#'>BOOKING</Linked>
                </td>
              </tr>
              <tr style={styles.trStyle}>
                <td onClick={() => {
                  dispatch(setKitchenState(false));
                  dispatch(setFurnitureState(false));
                  dispatch(setToiletriesState(false));
                  dispatch(setAppliancesState(false));
                  navigate("/blog");
                }}>
                  <Linked to='#' style={styles.tdStyle} href='#'>BLOG</Linked>
                </td>
              </tr>
              <tr style={styles.trStyle}>
                <td onClick={() => {
                  dispatch(setKitchenState(false));
                  dispatch(setFurnitureState(false));
                  dispatch(setToiletriesState(false));
                  dispatch(setAppliancesState(false));
                }}>
                  <Linked to='#' style={styles.tdStyle} href='#'>GET LEGAL</Linked>
                </td>
              </tr>
            </tbody>
          </table>
        </ShowRoomDropDownDiv1>
      </Fragment>
  )
};

export default ShowRoomDropDown;