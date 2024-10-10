import React from 'react';
import { PricePlanDiv, PricePlanDiv1, PricePlanDiv11, PricePlanDiv12,
         PricePlanDiv2, PricePlanDiv21, PricePlanDiv22, PricePlanDiv3,
        PricePlanDiv31, PricePlanDiv32 } from '../../styled/Facility/PricePlan/PricePlan';
import tick from '../../img/tick.png'

const PlanPrice = () => {
  const styles = {
    head: {
      marginTop: "3%",
    },
    remHead: {
      padding: "0rem",
      margin: "0rem",
    },
    rule: {
      width: "80%",
      marginLeft: "10%",
      marginTop: "4%",
    },
    italics: {
      marginTop: "3%",
    },
    tickImage: {
      width: "20%",
    },
    td1: {
      width: "20%",
      textAlign: "right",
      padding: "0.5rem"
    },
    td2: {
      fontSize: "0.89rem",
      paddingLeft: "0.6rem",
      textAlign: "left",
      padding: "0.5rem"
    },
    actionButton: {
      width: "40%",
      background: "#FFD700",
      color: "#fff",
      padding: "3%",
      borderStyle: "none",
      borderRadius: "14px",
      marginTop: "5%",
    },
    actionButton2: {
      width: "40%",
      color: "#fff",
      padding: "3%",
      borderStyle: "none",
      borderRadius: "14px",
      background: "#181C4D",
      marginTop: "5%",
    },
  };
  return (
    <PricePlanDiv>
      <PricePlanDiv1>
        <PricePlanDiv11>
          <h2 style={styles.head}>Essential</h2>
          <hr style={styles.rule} />
          <p style={styles.italics}><i>starting from</i></p>
          <h1 style={styles.remHead}>₦100,000</h1>
          <p><i>per month</i></p>
        </PricePlanDiv11>

        <PricePlanDiv12>
          <table style={styles.table}>
              <tbody>
                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>AIR CONDITIONING (3AC per annum)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>ELECTRICAL (Unlimited)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>PLUMBING (Unlimited)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>EMERGENCY RESPONSE TIME 24/7*</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>GENERATOR SERVICES (ONCE)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>
                    MAKING ARRANGEMENTS FOR 24*7 MAINTENANCE SERVICES ANALYSES THE FACILITIES THROUGHOUT
                    THE ENTIRE RANGE OF OPERATION CONDITIONS
                  </td>
                </tr>
              </tbody>
            </table>
            <button style={styles.actionButton}>Go to Plan</button>
        </PricePlanDiv12>
      </PricePlanDiv1>

      <PricePlanDiv2>
        <PricePlanDiv21>
          <h2 style={styles.head}>Elite</h2>
          <hr style={styles.rule} />
          <p style={styles.italics}><i>starting from</i></p>
          <h1 style={styles.remHead}>₦300,000</h1>
          <p><i>per month</i></p>
        </PricePlanDiv21>

        <PricePlanDiv22>
        <table style={styles.table}>
              <tbody>
                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>AIR CONDITIONING (10AC PER MONTH)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>ELECTRICAL (UNLIMITED)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>CARPENTRY / MASONRY</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>PLUMBING (UNLIMITED)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>GENERATOR SERVICES (ONCE)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>WATER TANK WASH</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>PAINTING & MAINTENANCE</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>EMERGENCY RESPONSE TIME  24*7</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>LANDSCAPE (ONE PERSON)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>SECURITY GUARD (ONE PERSON)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>EMERGENCY CALLOUTS (LIMITED TO 10 CALLS DAILY)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>
                    MAKING ARRANGEMENTS FOR 24*7 MAINTENANCE SERVICES ANALYSES THE FACILITIES THROUGHOUT
                    THE ENTIRE RANGE OF OPERATION CONDITIONS
                  </td>
                </tr>
              </tbody>
            </table>
            <button style={styles.actionButton2}>Go to Plan</button>
        </PricePlanDiv22>
      </PricePlanDiv2>

      <PricePlanDiv3>
        <PricePlanDiv31>
          <h2 style={styles.head}>Executive</h2>
          <hr style={styles.rule} />
          <p style={styles.italics}><i>starting from</i></p>
          <h1 style={styles.remHead}>₦200,000</h1>
          <p><i>per month</i></p>
        </PricePlanDiv31>

        <PricePlanDiv32>
        <table style={styles.table}>
              <tbody>
                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>AIR CONDITIONING (5AC per month)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>ELECTRICAL (Unlimited)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>PLUMBING (Unlimited)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>PAINTING & MAINTENANCE</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>CARPENTRY / MASONRY</td>
                </tr>


                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>EMERGENCY RESPONSE TIME 24*7</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>GENERATOR SERVICES (ONCE)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>EMERGENCY CALLOUTS (Limited to 5 calls daily)</td>
                </tr>

                <tr style={styles.tr}>
                  <td style={styles.td1}>
                    <img style={styles.tickImage} src={tick} alt='tss' title='tss'/>
                  </td>
                  <td style={styles.td2}>
                    MAKING ARRANGEMENTS FOR 24*7 MAINTENANCE SERVICES ANALYSES THE FACILITIES THROUGHOUT
                    THE ENTIRE RANGE OF OPERATION CONDITIONS
                  </td>
                </tr>
              </tbody>
            </table>
            <button style={styles.actionButton}>Go to Plan</button>
        </PricePlanDiv32>
      </PricePlanDiv3>
    </PricePlanDiv>
  )
};

export default PlanPrice;