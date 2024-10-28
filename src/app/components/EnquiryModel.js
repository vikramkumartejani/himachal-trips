import React from 'react';
import '../../styles/EnquiryModal.css';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

// const EnquiryModel = ({ closeModal }) => {
//   return (
//     <div className='modal-main-container'>
//       <div className='modal-background'>
//         <div className='modal-container'>
//           <Image src='/assests/modal-image.png' alt='t' width={300} height={180} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} />

//           <div className='modal-body'>
//             <div className='modal-header'>
//               <h4>
//                 Save upto 30% winter season & summer vacations.  Request a call back.
//               </h4>
//             </div>
//             <form style={{ width: '100%' }} >
//               <div className='modal-input'>
//                 <input type="tel" placeholder='Enter Your 10-digit Mobile No.' required />
//               </div>
//               <button type="submit" className='modal-submit-btn'>Submit</button>
//               <button onClick={closeModal} className='no-thanks'>No Thanks</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const EnquiryModel = ({ closeModal }) => {
  return (
    <div className='modal-main-container'>
      <div className='modal-background'>
        <div className='modal-container'>
          <Image
            src='/assests/modal-image.png'
            alt='t'
            width={300}
            height={180}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
          />

          <div className='modal-body'>
            <div className='modal-header'>
              <h4 style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
                Save up to 30% this Winter Season & Summer Vacation!
              </h4>
              <p style={{ fontSize: '16px', color: '#555', marginTop: '10px' }}>
                Please fill out the form below, and our travel consultant will reach out to you shortly to assist with your query.
              </p>
            </div>
            <form style={{ width: '100%' }}>
              <div className='modal-input'>
                <input
                  type="tel"
                  placeholder='Enter Your 10-digit Mobile No.'
                  required
                  style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
              </div>
              <button type="submit" className='modal-submit-btn' style={{ marginTop: '15px', backgroundColor: '#007bff', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Submit
              </button>
              <button onClick={closeModal} className='no-thanks' style={{ marginTop: '10px', backgroundColor: 'transparent', color: '#007bff', border: 'none', cursor: 'pointer' }}>
                No Thanks
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default EnquiryModel;
