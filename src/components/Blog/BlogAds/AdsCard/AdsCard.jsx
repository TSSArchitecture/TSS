import React from 'react';
import movie1 from '../../../../img/apartment/updated/update4.MP4';
import photo49 from '../../../../img/apartment/updated/update9.JPG';

const AdsCard = () => {

  const styles = {
    glimpsePhoto : {
      width:"95%",
      height: "30em",
      margin: "2%",
    }
  };

  return (
    <div className='Ads-card'>
       <video style={styles.glimpsePhoto}  controls poster={photo49}>
          <source src={movie1} type="video/mp4" />
          <source src={movie1.ogg} type="video/ogg" />
        </video>
    </div>
  )
};


export default AdsCard;