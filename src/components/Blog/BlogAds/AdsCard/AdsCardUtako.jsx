import React from 'react';
import movie1 from '../../../../img/ads/onebedroom.mp4';
import movie2 from '../../../../img/ads/twobedroom.mp4';
import movie3 from '../../../../img/ads/studio.mp4';
import photo49 from '../../../../img/apartment/updated/update9.JPG';
import photo50 from '../../../../img/apartment/photo30.jpg';
import photo51 from '../../../../img/apartment/photo38.jpg';

const AdsCardUtako = () => {


  return (
    <div className='Ads-card-utako'>
       <video className='ads-child-display'  controls poster={photo49}>
          <source src={movie1} type="video/mp4" />
          <source src={movie1.ogg} type="video/ogg" />
        </video>

        <video className='ads-child-display'  controls poster={photo50}>
          <source src={movie2} type="video/mp4" />
          <source src={movie2.ogg} type="video/ogg" />
        </video>

        <video className='ads-child-display'  controls poster={photo51}>
          <source src={movie3} type="video/mp4" />
          <source src={movie3.ogg} type="video/ogg" />
        </video>
    </div>
  )
};


export default AdsCardUtako;