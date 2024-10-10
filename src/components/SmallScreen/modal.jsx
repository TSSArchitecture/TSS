import React from 'react';
// import { Link, } from 'react-router-dom';
import { useNavigate, } from 'react-router';
import {  useDispatch, useSelector } from 'react-redux';
import { setSmallMenuState, setMenuInteriorState, 
         setMenuShowRoomState, setMenuLocationState,
         setMenuContactState, setDetailState, setTSSMoreState } from '../../actions/allCSS';
import {setBookingState, } from '../../actions/booking';
import "../CSS/Modal/modal.css";
import Modal from 'react-modal';
import { ModalDiv } from '../../styled/Header/Header';
import { setInteriorAllState, setInteriorArchiState, setInteriorIntState,
  setInteriorUrbanState, setPrivateResidenceState,
  setApartmentState, setUpcomingState, } from '../../actions/allCSS';
import { setFurnitureState, setAppliancesState, 
         setKitchenState,setToiletriesState,} from '../../actions/allCSS';

  const ModalMenu = () => {
    const styles = {
      small_cat_child : {
        padding: "1rem",
      },
      locations_di: {
        textAlign: "left",
      },
      locations_unit: {
        padding: "0.65rem",
        paddingLeft: "1.7rem",
        textAlign: "left",
      },
      int: {
        textAlign: "center",
      },
    };
    const { menuInterior, 
            menuShopAll, smallMenuState, 
            menuLocation, menuContact, tssMore } = useSelector(state => state.allCSS);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const requestClose = () => dispatch(setSmallMenuState(undefined));
    // const { interiorAll, interiorInt, interiorUrban,
    //   privateResidence, interiorArchi, apartment,
    //   upcoming } = useSelector(state => state.allCSS);

    const handleInteriorUpcoming = () => {
      dispatch(setInteriorAllState(false));      
      dispatch(setInteriorIntState(false));
      dispatch(setInteriorUrbanState(false));
      dispatch(setPrivateResidenceState(false));
      dispatch(setInteriorArchiState(false));
      dispatch(setDetailState(false));
      dispatch(setApartmentState(false));
      dispatch(setUpcomingState(true));
    };
    const handleInteriorApart = () => {
      dispatch(setInteriorAllState(false));      
      dispatch(setInteriorIntState(false));
      dispatch(setInteriorUrbanState(false));
      dispatch(setPrivateResidenceState(false));
      dispatch(setInteriorArchiState(false));
      dispatch(setDetailState(false));
      dispatch(setApartmentState(true));
      dispatch(setUpcomingState(false));
    };

    const handleInteriorDetails = () => {
      dispatch(setInteriorAllState(false));      
      dispatch(setInteriorIntState(false));
      dispatch(setInteriorUrbanState(false));
      dispatch(setPrivateResidenceState(false));
      dispatch(setInteriorArchiState(false));
      dispatch(setApartmentState(false));
      dispatch(setUpcomingState(false));
      dispatch(setDetailState(true));
    };

    return(
      <ModalDiv>
        <Modal
          isOpen={smallMenuState}
          onRequestClose={requestClose}
          ariaHideApp={false}
          contentLabel="dot.com"
          closeTimeoutMS={400}
          className='modal'>
            <div>
              <table>
                <tbody className='modal-tbody'>
                  <tr onClick={() => {
                    dispatch(setSmallMenuState(false));
                  }}>
                    <td><i className="fa fa-close"></i></td>
                    <td>Close Menu</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='shop-all-small-screen'>
              <table className='shop-all-small-table'>
                <tbody className='modal-tbody'>
                  <tr onClick={() => {
                    dispatch(setMenuShowRoomState(!menuShopAll));
                  }} className='cat-table-tr'>
                    <td style={styles.small_cat_child} className='shop-all-small-left' >SHOW ROOM</td>
                    <td className='shop-all-small-right'><i className="fa fa-angle-down"></i></td>
                  </tr>
                </tbody>
              </table>
              {<div className='all-shop-listings'>
               { menuShopAll && <table className='shop-all-small-hair-text'>
                  <tbody className='modal-tbody'>
                    <tr className='cat-table-tr'>
                      <td className='small-cat-child'>HOUSEHOLDS</td>
                      <td className='shop-all-small-cat-right'><i className="fa fa-angle-down"></i></td>
                    </tr>
                  </tbody>
                </table>}
                { menuShopAll && <table className='shop-all-small-hair-text-list'>
                  <tbody className='modal-tbody'>
                    <tr className='cat-table-tr'>
                      <td onClick={() => {
                        navigate("/showroom");
                        dispatch(setSmallMenuState(false));
                        dispatch(setFurnitureState(true));
                        dispatch(setAppliancesState(false));
                        dispatch(setKitchenState(false));
                        dispatch(setToiletriesState(false));
                      }} className='cat-left-child' ><p className='cat-left-child-p'>FURNITURE</p></td>
                    </tr>
                    <tr className='cat-table-tr'>
                      <td onClick={() => {
                        navigate("/showroom");
                        dispatch(setSmallMenuState(false));
                        dispatch(setAppliancesState(true));
                        dispatch(setFurnitureState(false));
                        dispatch(setKitchenState(false));
                        dispatch(setToiletriesState(false));
                      }}  className='cat-left-child' ><p className='cat-left-child-p'>ELECTRONICS</p></td>
                    </tr>
                    <tr className='cat-table-tr'>
                      <td onClick={() => {
                        navigate("/showroom");
                        dispatch(setSmallMenuState(false));
                        dispatch(setToiletriesState(false));
                        dispatch(setFurnitureState(false));
                        dispatch(setKitchenState(true));
                        dispatch(setAppliancesState(false));
                      }}  className='cat-left-child' ><p className='cat-left-child-p'>KITCHEN APPLIANCES</p></td>
                    </tr>
                    <tr className='cat-table-tr'>
                      <td onClick={() => {
                        navigate("/showroom");
                        dispatch(setSmallMenuState(false));
                        dispatch(setKitchenState(false));
                        dispatch(setFurnitureState(false));
                        dispatch(setToiletriesState(true));
                        dispatch(setAppliancesState(false));
                      }}  className='cat-left-child' ><p className='cat-left-child-p'>TOILETRIES</p></td>
                    </tr>         
                  </tbody>
                </table>}
                <table className='shop-all-small-kueen-kits'>
                  <tbody>
                    <tr onClick={() => {
                      dispatch(setMenuInteriorState(!menuInterior));
                    }}>
                      <td style={styles.small_cat_child} className='shop-all-small-cat-left' >INTERIOR</td>
                      <td className='shop-all-small-cat-right'><i className="fa fa-angle-down"></i></td>
                    </tr>
                  </tbody>
                </table>
                { menuInterior && <table className='shop-all-small-kueen-kits-list'>
                  <tbody>
                    <tr>
                      <td onClick={() => {
                        handleInteriorApart();
                        navigate("/interior");
                        dispatch(setSmallMenuState(false));
                      }}  className='cat-left-child' ><p className='cat-left-child-p'>RESIDENTIAL</p></td>
                    </tr>
                    <tr>
                      <td onClick={() => {
                        navigate("/interior");
                        dispatch(setSmallMenuState(false));
                      }}  className='cat-left-child' > <p className='cat-left-child-p'>OFFICE SPACE</p></td>
                    </tr>
                    <tr>
                      <td onClick={() => {
                        navigate("/interior");
                        dispatch(setSmallMenuState(false));
                      }}  className='cat-left-child' > <p className='cat-left-child-p'>COMMERCIAL PROPERTIES</p></td>
                    </tr>
                    <tr>
                      <td onClick={() => {
                        handleInteriorDetails();
                        navigate("/interior");
                        dispatch(setSmallMenuState(false));
                      }}  className='cat-left-child' > <p className='cat-left-child-p'>DETAILS</p></td>
                    </tr>
                    <tr>
                      <td onClick={() => {
                        handleInteriorUpcoming();
                        navigate("/interior");
                        dispatch(setSmallMenuState(false));
                      }} className='cat-left-child' > <p className='cat-left-child-p'>UPCOMING</p></td>
                    </tr>
                  </tbody>
                </table>}

                <table className='shop-all-small-kueen-kits'>
                  <tbody>
                    <tr onClick={() => {
                      dispatch(setTSSMoreState(!tssMore));
                    }}>
                      <td style={styles.small_cat_child} className='shop-all-small-cat-left' >TSS MORE</td>
                      <td className='shop-all-small-cat-right'><i className="fa fa-angle-down"></i></td>
                    </tr>
                  </tbody>
                </table>
                { tssMore && <table className='shop-all-small-kueen-kits-list'>
                  <tbody>
                    <tr>
                      <td onClick={() => {
                        dispatch(setSmallMenuState(false));
                      }}  className='cat-left-child' ><p className='cat-left-child-p'>PROPERTY</p></td>
                    </tr>
                    <tr>
                      <td onClick={() => {
                        dispatch(setSmallMenuState(false));
                      }}  className='cat-left-child' > <p className='cat-left-child-p'>SHOP</p></td>
                    </tr>
                    <tr>
                      <td onClick={() => {
                         dispatch(setSmallMenuState(false));
                         dispatch(setBookingState(true));
                      }}  className='cat-left-child' > <p className='cat-left-child-p'>BOOKING</p></td>
                    </tr>
                    <tr>
                      <td onClick={() => {
                        navigate("/blog");
                        dispatch(setSmallMenuState(false));
                      }}  className='cat-left-child' > <p className='cat-left-child-p'>BLOG</p></td>
                    </tr>
                    <tr>
                      <td onClick={() => {
                        dispatch(setSmallMenuState(false));
                      }} className='cat-left-child' > <p className='cat-left-child-p'>GET LEGAL</p></td>
                    </tr>
                  </tbody>
                </table>}

                <table className='shop-all-small-kueen-lashes'>
                  <tbody>
                    <tr>
                      <td onClick={() => {
                        navigate("/facility");
                        dispatch(setSmallMenuState(false));
                      }} style={styles.small_cat_child} className='shop-all-small-cat-left' >FACILITY MANAGEMENT</td>
                    </tr>
                  </tbody>
                </table>
              </div>}
            </div>
            
            <div className='shop-all-small-screen'>
              <table className='shop-all-small-table'>
                <tbody>
                  <tr>
                    <td onClick={() => {
                      navigate("/");
                      dispatch(setSmallMenuState(false));
                      }} style={styles.small_cat_child} className='shop-all-small-left' >HOME</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='shop-all-small-screen'>
              <table className='shop-all-small-table'>
                <tbody>
                  <tr>
                    <td onClick={() => {
                        navigate("/about");
                        dispatch(setSmallMenuState(false));
                      }} style={styles.small_cat_child} className='shop-all-small-left' >ABOUT US</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='shop-all-small-screen'>
              <table className='shop-all-small-table'>
                <tbody>
                  <tr onClick={() => {
                    dispatch(setMenuLocationState(!menuLocation))
                  }}>
                    <td style={styles.small_cat_child} className='shop-all-small-left' >OUR LOCATIONS</td>
                    <td className='shop-all-small-right'><i className="fa fa-angle-down"></i></td>
                  </tr>
                </tbody>
              </table>
              {menuLocation && <div style={styles.locations_di} className='locations-di'>
                <div style={styles.locations_unit} className='locations-unit'>
                  <p>Abuja</p>
                </div>
                <div style={styles.locations_unit} className='locations-unit'>
                  <p>Lagos</p>
                </div>
                <div style={styles.locations_unit} className='locations-unit'>
                  <p>Calabar</p>
                </div>
                <div style={styles.locations_unit} className='locations-unit'>
                  <p>Port Harcourt</p>
                </div>
                <div style={styles.locations_unit} className='locations-unit'>
                  <p>Kano</p>
                </div>
                <div style={styles.locations_unit} className='locations-unit'>
                  <p>Enugu</p>
                </div>
                <div style={styles.locations_unit} className='locations-unit'>
                  <p>Kaduna</p>
                </div>
                <div style={styles.locations_unit} className='locations-unit'>
                  <p>Uyo</p>
                </div>
              </div>}
            </div>

            <div className='shop-all-small-screen last-child'>
              <table className='shop-all-small-table'>
                <tbody>
                  <tr onClick={() => {
                    dispatch(setMenuContactState(!menuContact));
                  }}>
                    <td onClick={() => {
                      navigate("#");
                    }} style={styles.small_cat_child} className='shop-all-small-left' >CONTACT</td>
                    <td className='shop-all-small-right'><i className="fa fa-angle-down"></i></td>
                  </tr>
                </tbody>
              </table>
              {menuContact && <div className='contactus-di'>
                <div style={styles.locations_unit} className='contactus-unit'>
                  <p onClick={() => {
                    navigate("/contact");
                    dispatch(setSmallMenuState(false));
                  }}>Contact Us</p>
                </div>
                <div style={styles.locations_unit} className='contactus-unit'>
                  <p>FAQ</p>
                </div>
              </div>}
            </div>
          </Modal>
      </ModalDiv>
    );
  };

  export default ModalMenu;
