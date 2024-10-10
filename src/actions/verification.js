export const setPhoneNumber = (phoneNum) => (
  {
    type: 'SET_PHONE_NUMBER',
    phoneNum
  }
);

export const setVerifyState = (verify) => (   
  {
    type: 'SET_VERIFY_STATE',
    verify,
  }
);

export const setStaffIdentify = (currentStaff) => (   
  {
    type: 'SET_STAFF_IDENTIFY',
    currentStaff,
  }
);

export const setImageSet = (imageSet) => (   
  {
    type: 'SET_IMAGE_SET',
    imageSet,
  }
);

export const setPictureStr = (pictureStr) => (   
  {
    type: 'SET_PICTURE_STR',
    pictureStr,
  }
);

export const setFeedbackColor = (feedbackColor) => (   
  {
    type: 'SET_FEEDBACK_COLOR',
    feedbackColor,
  }
);


