import React from 'react';
import { useDispatch, } from 'react-redux';
import {DisplayServices, DisplayServices1, DisplayServices2, DisplayList} from '../../styled/Facility/Services/Services';
import { setAllServicesState, setElectricalServicesState,
         setPlumberServicesState, setACServicesState, setHandymanServicesState, setHomeImprovementState,
         setMoveState, setLandscapeState, setWaterTankState, setPestControlState,
         setPaintingState, setHouseKeepingState, setGeneratorState } from '../../actions/allCSS';
import cleaningServices from '../../img/cleaningServices.png';
import propertyDisinfection from '../../img/propertyDisinfection.png';
import airConditioning from '../../img/airConditioning.png';
import electricalServices from '../../img/electricalServices.png';
import plumbingServices from '../../img/plumbingServices.png';
import HandymanServices from '../../img/handymanServices.png';
import pestControl from '../../img/pestControl.png';
import waterTankCleaning from '../../img/waterTankCleaning.png';
import landScape from '../../img/landScape.png';
import swimmingPoolServices from '../../img/swimmingPoolServices.png';
import homeImprovement from '../../img/homeImprovement.png';
import specialCleaning from '../../img/specialCleaning.png';

const FacilityServices = () => {
  const styles = {
    image : {
      width: "55%",
    },
    para: {
      width: "90%",
      lineHeight:" 1.6",
      fontWeight: "200",
      wordBreak:" break-word",
    },
  };
  const dispatch = useDispatch();
  return (
    <DisplayServices>
      <DisplayServices1>
        <h1>Our Services</h1>
        <p style={styles.para}>At Triple Solutions Services (TSS), we are prime partners
          in ensuring that you choose the right maintenance practices. That is why we are
          fore-most in Nigeria. Everyday, our team of professionals are driven to find lasting
          solutions that should serve the desires of an optimally maintained environment. 
          We take out the stress out of home cleaning, 
          offering you quality and reliable regular cleaning service that you can trust at a reasonable price.
        </p>
      </DisplayServices1>

      <DisplayServices2>
        <DisplayList onClick={() => {
          dispatch(setPlumberServicesState(false));
          dispatch(setElectricalServicesState(false));
          dispatch(setHandymanServicesState(false));
          dispatch(setHomeImprovementState(false));
          dispatch(setACServicesState(false));
          dispatch(setWaterTankState(false)); 
          dispatch(setPestControlState(false));
          dispatch(setPaintingState(false));
          dispatch(setHouseKeepingState(false));
          dispatch(setGeneratorState(false));
          dispatch(setAllServicesState(true));
          dispatch(setMoveState(true));
        }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img style={styles.image} src={cleaningServices} alt='tss' title='tss' />
                </td>
                <td>Move In - Move Out</td>
              </tr>
            </tbody>
          </table>
        </DisplayList>

        <DisplayList onClick={() => {
          dispatch(setPlumberServicesState(false));
          dispatch(setElectricalServicesState(false));
          dispatch(setHandymanServicesState(false));
          dispatch(setHomeImprovementState(false));
          dispatch(setACServicesState(false));
          dispatch(setWaterTankState(false)); 
          dispatch(setPestControlState(false));
          dispatch(setMoveState(false));
          dispatch(setHouseKeepingState(false));
          dispatch(setGeneratorState(false));
          dispatch(setAllServicesState(true));
          dispatch(setPaintingState(true));
        }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img style={styles.image} src={propertyDisinfection} alt='tss' title='tss' />
                </td>
                <td>Painting</td>
              </tr>
            </tbody>
          </table>
        </DisplayList>

        <DisplayList onClick={() => {
          dispatch(setPlumberServicesState(false));
          dispatch(setElectricalServicesState(false));
          dispatch(setHandymanServicesState(false));
          dispatch(setHomeImprovementState(false));
          dispatch(setMoveState(false));
          dispatch(setWaterTankState(false)); 
          dispatch(setPestControlState(false));
          dispatch(setPaintingState(false));
          dispatch(setHouseKeepingState(false));
          dispatch(setGeneratorState(false));
          dispatch(setAllServicesState(true));
          dispatch(setACServicesState(true));
        }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img style={styles.image} src={airConditioning} alt='tss' title='tss' />
                </td>
                <td>Air Conditioning</td>
              </tr>
            </tbody>
          </table>
        </DisplayList>

        <DisplayList onClick={() => {
          dispatch(setPlumberServicesState(false));
          dispatch(setACServicesState(false));
          dispatch(setHandymanServicesState(false));
          dispatch(setHomeImprovementState(false));
          dispatch(setMoveState(false));
          dispatch(setWaterTankState(false)); 
          dispatch(setPestControlState(false));
          dispatch(setPaintingState(false));
          dispatch(setHouseKeepingState(false));
          dispatch(setGeneratorState(false));
          dispatch(setElectricalServicesState(true));
          dispatch(setAllServicesState(true));
        }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img style={styles.image} src={electricalServices} alt='tss' title='tss' />
                </td>
                <td>Electrical Services</td>
              </tr>
            </tbody>
          </table>
        </DisplayList>

        <DisplayList onClick={() => {
          dispatch(setACServicesState(false));
          dispatch(setElectricalServicesState(false));
          dispatch(setHandymanServicesState(false));
          dispatch(setHomeImprovementState(false));
          dispatch(setMoveState(false));
          dispatch(setWaterTankState(false)); 
          dispatch(setPestControlState(false));
          dispatch(setPaintingState(false));
          dispatch(setHouseKeepingState(false));
          dispatch(setGeneratorState(false));
          dispatch(setAllServicesState(true));
          dispatch(setPlumberServicesState(true));
        }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img style={styles.image} src={plumbingServices} alt='tss' title='tss' />
                </td>
                <td>Plumbing Services</td>
              </tr>
            </tbody>
          </table>
        </DisplayList>

        <DisplayList onClick={() => {
          dispatch(setPlumberServicesState(false));
          dispatch(setElectricalServicesState(false));
          dispatch(setACServicesState(false));
          dispatch(setHomeImprovementState(false));
          dispatch(setMoveState(false));
          dispatch(setWaterTankState(false)); 
          dispatch(setPestControlState(false));
          dispatch(setPaintingState(false));
          dispatch(setHouseKeepingState(false));
          dispatch(setGeneratorState(false));
          dispatch(setAllServicesState(true));
          dispatch(setHandymanServicesState(true));
        }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img style={styles.image} src={HandymanServices} alt='tss' title='tss' />
                </td>
                <td>Handyman Services</td>
              </tr>
            </tbody>
          </table>
        </DisplayList>

        <DisplayList onClick={() => {
          dispatch(setPlumberServicesState(false));
          dispatch(setElectricalServicesState(false));
          dispatch(setHandymanServicesState(false));
          dispatch(setHomeImprovementState(false));
          dispatch(setMoveState(false));
          dispatch(setWaterTankState(false)); 
          dispatch(setACServicesState(false));
          dispatch(setPaintingState(false));
          dispatch(setHouseKeepingState(false));
          dispatch(setGeneratorState(false));
          dispatch(setAllServicesState(true));
          dispatch(setPestControlState(true));
        }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img style={styles.image} src={pestControl} alt='tss' title='tss' />
                </td>
                <td>Pest Control</td>
              </tr>
            </tbody>
          </table>
        </DisplayList>

        <DisplayList onClick={() => {
          dispatch(setPlumberServicesState(false));
          dispatch(setElectricalServicesState(false));
          dispatch(setHandymanServicesState(false));
          dispatch(setACServicesState(false));
          dispatch(setMoveState(false));
          dispatch(setHomeImprovementState(false));
          dispatch(setPestControlState(false));
          dispatch(setPaintingState(false));
          dispatch(setHouseKeepingState(false));
          dispatch(setGeneratorState(false));
          dispatch(setAllServicesState(true));
          dispatch(setWaterTankState(true));    
        }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img style={styles.image} src={waterTankCleaning} alt='tss' title='tss' />
                </td>
                <td>Water Tank Cleaning</td>
              </tr>
            </tbody>
          </table>
        </DisplayList>

        <DisplayList onClick={() => {
          dispatch(setPlumberServicesState(false));
          dispatch(setElectricalServicesState(false));
          dispatch(setHandymanServicesState(false));
          dispatch(setHomeImprovementState(false));
          dispatch(setACServicesState(false));
          dispatch(setMoveState(false));
          dispatch(setWaterTankState(false)); 
          dispatch(setPestControlState(false));
          dispatch(setPaintingState(false));
          dispatch(setHouseKeepingState(false));
          dispatch(setGeneratorState(false));
          dispatch(setAllServicesState(true));
          dispatch(setLandscapeState(true));
        }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img style={styles.image} src={landScape} alt='tss' title='tss' />
                </td>
                <td>Landscape</td>
              </tr>
            </tbody>
          </table>
        </DisplayList>

        <DisplayList  onClick={() => {
          dispatch(setPlumberServicesState(false));
          dispatch(setElectricalServicesState(false));
          dispatch(setHandymanServicesState(false));
          dispatch(setACServicesState(false));
          dispatch(setMoveState(false));
          dispatch(setWaterTankState(false)); 
          dispatch(setPestControlState(false));
          dispatch(setPaintingState(false));
           dispatch(setHouseKeepingState(false));
           dispatch(setHomeImprovementState(false));
           dispatch(setGeneratorState(true));
          dispatch(setAllServicesState(true));
        }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img style={styles.image} src={swimmingPoolServices} alt='tss' title='tss' />
                </td>
                <td>Generator Services</td>
              </tr>
            </tbody>
          </table>
        </DisplayList>

        <DisplayList  onClick={() => {
          dispatch(setPlumberServicesState(false));
          dispatch(setElectricalServicesState(false));
          dispatch(setHandymanServicesState(false));
          dispatch(setACServicesState(false));
          dispatch(setMoveState(false));
          dispatch(setWaterTankState(false)); 
          dispatch(setPestControlState(false));
          dispatch(setPaintingState(false));
           dispatch(setHouseKeepingState(false));
           dispatch(setGeneratorState(false));
          dispatch(setAllServicesState(true));
          dispatch(setHomeImprovementState(true));
        }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img style={styles.image} src={homeImprovement} alt='tss' title='tss' />
                </td>
                <td>Home Improvement</td>
              </tr>
            </tbody>
          </table>
        </DisplayList>

        <DisplayList onClick={() => {
          dispatch(setPlumberServicesState(false));
          dispatch(setElectricalServicesState(false));
          dispatch(setHandymanServicesState(false));
          dispatch(setACServicesState(false));
          dispatch(setMoveState(false));
          dispatch(setWaterTankState(false)); 
          dispatch(setPestControlState(false));
          dispatch(setPaintingState(false));
          dispatch(setHomeImprovementState(false));
          dispatch(setGeneratorState(false));
          dispatch(setAllServicesState(true));
          dispatch(setHouseKeepingState(true));
        }}>
          <table>
            <tbody>
              <tr>
                <td>
                  <img style={styles.image} src={specialCleaning} alt='tss' title='tss' />
                </td>
                <td>House Keeping</td>
              </tr>
            </tbody>
          </table>
        </DisplayList>
      </DisplayServices2>

     
    </DisplayServices>
  )
};

export default FacilityServices;