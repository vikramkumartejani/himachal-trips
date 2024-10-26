"use client"
import React from 'react'
import './../styles/Footer.css'
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleClick = () => {
    const whatsappNumber = '+917836098136'; // Replace with your desired WhatsApp number

    // Open WhatsApp with the specific number
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleClickCall = () => {
    const phoneNumber = '+917836098136'; // Replace with your desired phone number

    // Open the phone dialer with the specific number
    window.open(`tel:${phoneNumber}`);
  };

  return (
    <div>
      <div className='footer'>
        <div className='container-1'>
          <div className='box'>
            <div className='text'>
              <h4>Get a Call Back</h4>
            </div>
            <div className='input'>
              <input type="text" name="" id="" placeholder='Enter your phone' />
              <button>
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className='container-2'>
          <div className='lists'>
            <div className='list-1'>
              <h6 className='title'>
                About Us
              </h6>
              <p>
                We have proudly been voted the #1 travel company in the area for the past twenty-five years for hospitality, services &amp; Transport. We offer personalized attention to the leisure and business traveller and will do our best to tend to your needs.
              </p>
              <div className='social'>
                <h6 className='title'>
                  Approved and Accredited By
                </h6>
                <img src="/assests/approved-by-tourism-india-himachal.png" alt="Approved by Tourism India Himachal" />
              </div>
            </div>
            <div className='list-2'>
              <ul>
                <h6 className='title'>
                  Useful Links
                </h6>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Shimla</a>
                </li>
                <li>
                  <a href="#">Manali</a>
                </li>
                <li>
                  <a href="#">Himachal</a>
                </li>

              </ul>
            </div>
            <div className='list-3'>
              <div className='properties'>
                <h6 className='title'>
                  Featured
                </h6>
                <a href="#">
                  <img src="/assests/g7.jpg" alt="" />
                  <p>
                    We Are Leading Travel Consultiing Agency
                  </p>
                </a>
                <a href="#">
                  <img src="/assests/g8.jpg" alt="" />
                  <p>
                    Top 10 Places In Himachal
                  </p>
                </a>
                <a href="#">
                  <img src="/assests/g9.jpg" alt="" />
                  <p>
                    10 Things to Consider While Visiting Himachal
                  </p>
                </a>
              </div>
            </div>
            <div className='list-4'>
              <h6 className='title'>
                Get In Touch
              </h6>
              <p>
                <b>Address: </b>
                Verma Niwas 2 Police Station, below BCS, Shimla, 171009
              </p>
              <p>
                <b>Hours: </b>
                Everyday, 10am–7pm
              </p>
              <p>
                <b>Phone: </b>
                07018398641
              </p>
            </div>
          </div>
          <div className='footer-bottom'>
            <p>
              © 2021 Himachal-Tourism.Org.In. All rights reserved | Designed by <a href="#">Himachal-Tourism.Org.In</a>
            </p>
          </div>
        </div>
      </div>
      
      <button className='go-to-top' onClick={handleClickCall}>
      <AiOutlinePhone size={20} />  
    </button>
      <button className='whatsapp' onClick={handleClick}>
      <AiOutlineWhatsApp size={20} /> 
    </button>
    </div>
  );
};

export default Footer;
