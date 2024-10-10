import React from 'react';



const BookingContent = () => (
  <div className='booking-cont-div'>
    <p className='booking-cont-p booking-cont-p0'>
      Get into an adorable treat when you choose from a curated list of luxury bookings on 
      offer. if you are looking for a feel of comfort, indulge these choice selection
      of suites that boasts of impeccable; spotless clean and stunningly beautiful in-spaces 
      desirable for your relaxation and for your pleasure.
    </p>

    <p className='booking-cont-p booking-cont-p1'>
      Amongst many other features, there are reserved and serene safe spaces that
      are private and conducive offering a touch of dazzling perks leaving you
      extremely satisfied on the go. When you choose recreational activities,
      turn up on a vibrant vibe, want to be left to enjoy a sky-view in open space
      or just observe the calm on rippling-waters by the pool-side, we have taken
      a cue and would not keep you guessing. We are sure to soothe your robust 
      needs in class, comfort and style. 
    </p>

    <p className='booking-cont-p booking-cont-p2'>
      In the offing, our hygienically on-demand cuisines are delightful; you are 
      assured of a memorable moment with a deft touch of all-round suit to taste.
    </p>

    <p className='booking-cont-p booking-cont-p2'>
      It is easy to get in here when you want to book an offer. From handling
      your pick-up to checking you into comfort, chat with any of our verified
      help-mate. We want to take all of the hassles away. 
    </p>

    <p className='booking-cont-p'>
      For bookings and more information, please
       <button onClick={() => {
          window.location.href = 'https://wa.me/2347032225466';
       }} className='booking-get-in-touch'> Contact Us.</button>
    </p>
  </div>
)


export default BookingContent;