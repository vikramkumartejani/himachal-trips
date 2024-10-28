import React from 'react';
import '../../styles/EnquiryModal.css';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const EnquiryModel = ({ closeModal }) => {
  return (
    <div className='modal-main-container'>
      <div className='modal-background'>
        <div className='modal-container'>
          <Image src='/assests/modal-image.png' alt='t' width={300} height={180} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} />

          <div className='modal-body'>
            <div className='modal-header'>
              <h4>
                Save upto 30% winter season & summer vacations.  Request a call back.
              </h4>
            </div>
            <form style={{ width: '100%' }} >
              <div className='modal-input'>
                <input type="tel" placeholder='Enter Your 10-digit Mobile No.' required />
              </div>
              <button type="submit" className='modal-submit-btn'>Submit</button>
              <button onClick={closeModal} className='no-thanks'>No Thanks</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModel;
