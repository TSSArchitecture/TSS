import React, { Fragment } from 'react';
import { HypeBoardDiv, HypeBoardInfo } from '../../styled/HomeBanner/HypeBoardDiv';
import write from '../../img/tss-write.png';
import customers from '../../img/tss-customers.png';
import cyclic from '../../img/tss-cyclic.png';



const HypeBoard = () => {

  const styles = {
    hStyle : {
      color : "#232323",
      fontSize: "1.8rem",
      lineHeight: "1.4",
      fontWeight: "500",
      wordBreak: "break-word",
      transition: "all .45s ease",
    },
    imgStyle : {
      marginTop: "10%",
    },
    paraStyle: {
      fontSize: "1.2rem",
      paddingLeft:"9%",
      paddingRight: "9%",
      marginBottom: "10%",
      color: "#636161",
    },
  };

  return (
    <Fragment>
      <HypeBoardDiv>
        <HypeBoardInfo>
          <img style={styles.imgStyle} src={write} title='Triple Solutions Services' alt='Triple Solutions Services'/>
          <h1 style={styles.hStyle}>Qualified & Driven Professionals</h1>
          <p style={styles.paraStyle}>The core team at TSS consists of Qualified and driven professionals
             comprising of Architects,
             Interior Designers and Engineers who create versatile body of work.
          </p>
        </HypeBoardInfo>

        <HypeBoardInfo>
          <img style={styles.imgStyle} src={cyclic} title='Triple Solutions Services' alt='Triple Solutions Services'/>
          <h1 style={styles.hStyle}>Timeless Designs</h1>
          <p style={styles.paraStyle}>Because we recognize that class is permanent, TSS produces designs that are
           suitable to all partners/client of your business and remains relevant for all seasons and years. We 
           maintain a balance between aesthetics and functionality in all our designs.
          </p>
        </HypeBoardInfo>

        <HypeBoardInfo>
          <img style={styles.imgStyle} src={customers} title='Triple Solutions Services' alt='Triple Solutions Services'/>
          <h1 style={styles.hStyle}>Happy Customers</h1>
          <p style={styles.paraStyle}>TSS maintains trusting and a close working relationship between the designer and 
            the client for the success and smooth functioning of any undertaken project.
          </p>
        </HypeBoardInfo>
      </HypeBoardDiv>
    </Fragment>
  )
};

export default HypeBoard;