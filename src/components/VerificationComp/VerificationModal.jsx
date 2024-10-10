import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector,  } from 'react-redux';
import {setVerifyState, } from '../../actions/verification';
import  {setPhoneNumber, setFeedbackColor, setStaffIdentify, 
         setImageSet, setPictureStr } from '../../actions/verification';
import close from '../../img/close.png';
import Staff from '../../helpers/Staff';
// import OkechukwuImg from '../../img/staffPhotos/Okechukwu.jpg';
// import JenniferImg from '../../img/staffPhotos/Jennifer.jpg';
// import PatrickImg from '../../img/staffPhotos/Patrick.jpg';
// import DogaraImg from '../../img/staffPhotos/Dogara.jpg';
// import StephenImg from '../../img/staffPhotos/Stephen.jpg';

const VerificationModal  = () => {
  const dispatch = useDispatch();
  const closeVerifyState = () => dispatch(setVerifyState(undefined));
  const { verify } = useSelector(state => state.verification);
  const { phoneNum, feedbackColor, imageSet, pictureStr } = useSelector(state => state.verification);
  const getStaffNumber = (phoneNumber) => {
    const theNumber = Staff().filter(res => res.ContactNo === phoneNumber);
    if(theNumber.length < 1 && phoneNum.length > 0){
      dispatch(setFeedbackColor('red'));
      return 'Unverified staff.';
    }
    if(theNumber.length < 1){
      dispatch(setFeedbackColor('red'));
      return 'Error retrieving contact address';
    }; 
    if(Staff() === "Undefined"){
      dispatch(setFeedbackColor('red'));
      return 'cannot read Staff';
    };
    try{
      if(theNumber[0].ContactNo === phoneNumber){
        dispatch(setFeedbackColor('green'));
        dispatch(setStaffIdentify(theNumber[0].firstName));
        dispatch(setPictureStr(theNumber[0].pictureString));
        dispatch(setImageSet(true));
        return `Staff is verified: ${theNumber[0].name}`;
      }else{   
        dispatch(setFeedbackColor('green'));     
        return "This is likely not our staff";
      };                                                                                
    }catch(err){
      dispatch(setFeedbackColor('green'));
      return "Invalid Operation!";
    };
  };   

  const phoneNoSubmit = (e) => {
    e.preventDefault();
    const phoneNo = e.target.elements.phoneNum.value.trim();
    dispatch(setPhoneNumber(getStaffNumber(phoneNo)));
};

  return (
    // <div className='join-group'>
    // </div>
    <Modal isOpen={verify}
      onRequestClose={closeVerifyState}
      ariaHideApp={false}
      contentLabel="tssarchitecture.com"
      closeTimeoutMS={400}
      className='join-group-modal'>
        <div className='join-group-inner'>
          <form onSubmit={phoneNoSubmit} className='join-group-form'>
            <table className='join-group-form-table'>
              <tbody>
                <tr>
                  <td className='jpft-td'>Verify Staff</td>
                  <td className='jpft-td2'><img onClick={() => {
                      dispatch(setPhoneNumber(''));
                      dispatch(setVerifyState(false));
                      dispatch(setPhoneNumber('Yet to verify staff.'));
                      dispatch(setImageSet(false));
                      dispatch(setFeedbackColor('red'));
                    }} className='add-genre-close' src={close} alt='tss' title='tss'/></td>
                </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
              </tbody>
            </table>
              <p className='cat-lab'>
                Verify Staff*
              </p>
              {/* <input className='join-group-input' type='text' placeholder=' Enter Staff Name' /> */}
              <input className='join-group-input' 
                name='phoneNum'
                type='number' placeholder=' Staff Phone Number e.g 080******82' />
            <button className='join-group-submit'>Verify Staff</button>
            <p style={{color: feedbackColor}}>{`${phoneNum}`}</p>
            {/* {imageSet && currentStaff === "Okechukwu" && 
            <img className='verifyStaffImg' title='www.tssarchitecture.com' alt='www.tssarchitecture.com' 
            src={OkechukwuImg}/>}
            {imageSet && currentStaff === "Jennifer" && 
            <img className='verifyStaffImg' title='www.tssarchitecture.com' alt='www.tssarchitecture.com' 
            src={JenniferImg}/>}
            {imageSet && currentStaff === "Patrick" && 
            <img className='verifyStaffImg' title='www.tssarchitecture.com' alt='www.tssarchitecture.com' 
            src={PatrickImg}/>}
            {imageSet && currentStaff === "Dogara" && 
            <img className='verifyStaffImg' title='www.tssarchitecture.com' alt='www.tssarchitecture.com' 
            src={DogaraImg}/>}
            {imageSet && currentStaff === "Stephen" && 
            <img className='verifyStaffImg' title='www.tssarchitecture.com' alt='www.tssarchitecture.com' 
            src={StephenImg}/>} */}
            
            {imageSet && 
            <img className='verifyStaffImg' 
             title='www.tssarchitecture.com || Interior || Design || Architecture || TSS' 
             alt='www.tssarchitecture.com || TRIPPLE S SOLUTION SERVICES || TSS' 
            src={pictureStr}/>}
          </form>
        </div>
    </Modal>
  );
};

export default VerificationModal;
