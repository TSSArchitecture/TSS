import React, {Fragment} from 'react';
import { useDispatch } from 'react-redux';
import { history } from '../../routers/AppRouter';
import paths from '../../helpers/paths';
import { HeaderMenu, Linked } from '../../styled/Header/HeaderMenu';
import add from '../../img/added.png';
import { setProjectOneState, setProjectTwoState,
         setShowRoomOneState, setShowRoomTwoState, 
         setUpcomingState, setDetailState,} from '../../actions/allCSS';
import { setFurnitureState, setAppliancesState, 
         setKitchenState,setToiletriesState} from '../../actions/allCSS';

const HeaderMenuComp = () => {
  const styles = {
    headerText: {
      fontSize: "40px",
    },
    menuTable: {
      width:"100%",
      borderCollapse: "collapse",
      textAlign: "center",
    },
    TableTd: {
      width:"3%",
      fontSize: "0.87rem",
      // paddingTop: ".53rem",
      // paddingBottom:".53rem",
    },
    TableImg: {
      width: "0.67rem",
      background: "#FFD700",
    },
  };
  
  const dispatch = useDispatch();
  const handleProjectStateOn = () => {
    dispatch(setProjectOneState(true));      
    dispatch(setProjectTwoState(true)); 
    dispatch(setShowRoomOneState(false));
    dispatch(setShowRoomTwoState(false));
  };

  const handleShowRoomStateOn = () => {
    dispatch(setProjectOneState(false));      
    dispatch(setProjectTwoState(false)); 
    dispatch(setShowRoomOneState(true));
    dispatch(setShowRoomTwoState(true));
  };

  const clearAllMenuState = () => {
    dispatch(setProjectOneState(false));      
    dispatch(setProjectTwoState(false)); 
    dispatch(setShowRoomOneState(false));
    dispatch(setShowRoomTwoState(false));
  };

  return (
    <Fragment>
      <HeaderMenu>
        <table style={styles.menuTable}>
          <tbody>
            <tr>
              <td  onClick={() => {
                    history.push(paths.about);
                  }} style={styles.TableTd} onMouseEnter={clearAllMenuState}><Linked
                      onClick={() => {
                        history.push(paths.about);
                      }}
                      to='/about' onMouseEnter={clearAllMenuState}>ABOUT US <img style={styles.TableImg}
                      src={add} 
                      title='Triple Solutions Services Home' 
                      alt=''/></Linked></td>

              <td onClick={() => {
                dispatch(setUpcomingState(false));
                dispatch(setDetailState(false));
              }} style={styles.TableTd} onMouseEnter={clearAllMenuState}><Linked
                      to='/interior' onMouseEnter={clearAllMenuState}>INTERIOR DESIGN <img style={styles.TableImg}
                      src={add} 
                      title='About Triple Solutions Services' 
                      alt=''/></Linked></td>


              <td  onClick={() => {
                    history.push(paths.projects);
                    dispatch(setUpcomingState(false));
                    dispatch(setDetailState(true));
                  }} style={styles.TableTd}>
                <Linked
                  to='/interior' onMouseEnter={handleProjectStateOn}>
                    PROJECTS <img style={styles.TableImg}
                  src={add} 
                  title='Triple Solutions Services Projects' 
                  alt=''/></Linked></td>
              
              <td style={styles.TableTd} onMouseEnter={clearAllMenuState}><Linked
                      to='/facility' onMouseEnter={clearAllMenuState}>FACILITY MANAGEMENT <img style={styles.TableImg}
                    src={add} 
                      title='FACILITIES MANAGEMENT SERVICES PROVIDER' 
                      alt='FACILITIES MANAGEMENT SERVICES PROVIDER'/></Linked></td>

              <td onClick={() => {
                dispatch(setFurnitureState(true));
                dispatch(setAppliancesState(true));
                dispatch(setKitchenState(true));
                dispatch(setToiletriesState(true));
              }} style={styles.TableTd} onMouseEnter={clearAllMenuState}><Linked
                      to='#' onMouseEnter={handleShowRoomStateOn}>TSS MORE <img style={styles.TableImg}
                      src={add} 
                      title='Triple Solutions Services Show Room' 
                      alt=''/></Linked></td>

              <td style={styles.TableTd} onMouseEnter={clearAllMenuState}><Linked
                      to='/contact' onMouseEnter={clearAllMenuState}>CONTACT <img style={styles.TableImg}
                      src={add} 
                      title='Triple Solutions Services Contact' 
                      alt=''/></Linked></td>
            </tr>

          </tbody>
        </table >
      </HeaderMenu>
    </Fragment>
  )
};

export default HeaderMenuComp;