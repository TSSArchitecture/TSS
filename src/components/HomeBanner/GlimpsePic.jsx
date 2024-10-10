import React from 'react';
import { GlimpsePicDiv, GlimpsePicDiv1, 
  GlimpsePicDiv2, GlimpsePicDiv3 } from '../../styled/HomeBanner/GlimpsePicDiv';
import photo1 from '../../img/home1.jpg';
import photo2 from '../../img/home2.jpg';
import photo3 from '../../img/home9.jpg';


  const GlimpsePic = () => {
    const styles = {
      glimpsePhoto : {
        width:"100%"
      },
    };
    return (
      <GlimpsePicDiv>
        <GlimpsePicDiv1>
          <img style={styles.glimpsePhoto} src={photo1} alt='tssarchitecture | tss architecture' title='tssarchitecture.com'/>
        </GlimpsePicDiv1>

        <GlimpsePicDiv2>
          <img style={styles.glimpsePhoto} src={photo2} alt='tssarchitecture | tss architecture' title='tssarchitecture.com'/>
        </GlimpsePicDiv2>

        <GlimpsePicDiv3>
          <img style={styles.glimpsePhoto} src={photo3} alt='tssarchitecture | tss architecture | TSS' title='tssarchitecture.com'/>
        </GlimpsePicDiv3>
      </GlimpsePicDiv>
    )
  };

  export default GlimpsePic;