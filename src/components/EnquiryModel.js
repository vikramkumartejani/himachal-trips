import React from 'react';
import './../styles/EnquiryModal.css';
import { AiOutlineClose } from 'react-icons/ai';

const EnquiryModel = ({ closeModal }) => {
  return (
    <div className='modal-main-container'>
      <div className='modal-background'>
        <div className='modal-container'>
          <div className='modal-header'>
            <h4>
              Enquire Now for Free!
            </h4>
            <button onClick={closeModal}>  <AiOutlineClose size={24} /></button>
          </div>

          <div className='modal-body'>
            <form style={{ width: '100%' }} >
              <h5 className='modal-title'>Phone Number</h5>
              <div className='modal-input'>
                <input type="tel" placeholder='Enter Your 10-digit Mobile No.' required />
              </div>
              <button type="submit" className='modal-submit-btn'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModel;
