import React  from 'react';
import { DisplayDiv, DisplayDiv1, DisplayTable } from '../../styled/Facility/PayAdvert/DisplayDiv';

const FacilityPay = () => {

  const style = {
    truckIcon : {
      textAlign: "left",
      fontSize: "3rem",
      color: "#181C4D",
    },
       
    iconText: {
     textAlign: "left",
     fontSize:"0.79em",
     opacity:".8",
    },
    
    iconText1: {
      textAlign: "left",
      opacity:".67",
    },
    
    allAdds: {
      marginLeft:"2%",
    },
  };
  return (
    <DisplayDiv>
      <DisplayDiv1>
        <i style={style.truckIcon} className="fa fa-truck"></i>
        <DisplayTable>
          <tbody>
            <tr>
              <td style={style.iconText1}><h3>Reliable Delivery</h3></td>
            </tr>
            <tr>
              <td style={style.iconText}>Trust us at TSS</td>
            </tr>
            <tr>
              <td style={style.iconText}>More than 500 properties sold</td>
            </tr>
          </tbody>
        </DisplayTable>
      </DisplayDiv1>

      <DisplayDiv1>
        <i style={style.truckIcon} className={`${`fa fa-money`} ${style.truckIcon}`}></i>
        <DisplayTable>
          <tbody>
            <tr>
              <td style={style.iconText1}><h3>Suitable Plan</h3></td>
            </tr>
            <tr>
              <td style={style.iconText}>Quality Control Assured</td>
            </tr>
            <tr>
              <td style={style.iconText}>Right Maintenance policy</td>
            </tr>
          </tbody>
        </DisplayTable>
        </DisplayDiv1>


      <DisplayDiv1>
        <i style={style.truckIcon} className={`${`fa fa-money`} ${style.truckIcon}`}></i>
        <DisplayTable>
          <tbody>
            <tr>
              <td style={style.iconText1}><h3>Pay Directly Online</h3></td>
            </tr>
            <tr>
              <td style={style.iconText}>5% Discount</td>
            </tr>
            <tr>
              <td style={style.iconText}>Money Back Guarantee</td>
            </tr>
          </tbody>
        </DisplayTable>
        </DisplayDiv1>

        <DisplayDiv1>
        <i style={style.truckIcon} className={`${`fa fa-id-badge`} ${style.truckIcon}`}></i>
        <DisplayTable>
          <tbody>
            <tr>
              <td style={style.iconText1}><h3>Contact Us</h3></td>
            </tr>
            <tr>
              <td style={style.iconText}>24 Hours Available</td>
            </tr>
            <tr>
              <td style={style.iconText}>Reach +234(0)7032225466</td>
            </tr>
          </tbody>
        </DisplayTable>
        </DisplayDiv1>
      </DisplayDiv>
  )
};

export default FacilityPay;