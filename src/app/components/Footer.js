"use client"
import React, { useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import '../../styles/Footer.css'
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  const router = useRouter(); // Initialize the router

  const handleClick = () => {
    const whatsappNumber = '+917836098136';
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  const handleClickCall = () => {
    const phoneNumber = '+917836098136';
    window.open(`tel:${phoneNumber}`);
  };

  const [formStatus, setFormStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [phone, setPhone] = useState('')
  const formRef = useRef(null)

  const handleFooterSubmit = useCallback(async (event) => {
    event.preventDefault()
    setFormStatus('submitting')
    setErrorMessage('')

    const formData = new FormData()
    formData.append("phone", phone)
    formData.append("access_key", "652de30f-937e-4626-9dbd-e62c44ee6254")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const emailResponse = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })

      if (!emailResponse.ok) {
        throw new Error(`HTTP error! status: ${emailResponse.status}`)
      }

      const result = await emailResponse.json()

      if (result.success) {
        console.log("Web3Forms submission result:", result)
        setFormStatus('success')
        setPhone('') // Clear the input

        // Redirect immediately to Thank You page
        router.push('/thankyou'); // This redirects the user to the Thank You page

        // Send message to Telegram asynchronously (in the background)
        sendTelegramNotification(object)

      } else {
        throw new Error(result.message || "There was an error submitting the form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus('error')
      setErrorMessage(error.message)
    }
  }, [phone, router]) // Add router to the dependency array

  const sendTelegramNotification = async (formData) => {
    const botToken = "7953446645:AAGMjGBx1cotqlXIWci7PraNNJZLS6nKgWk"
    const chatId = "148013002"
    const telegramMessage = `
    New Form Submission:
    Phone: ${formData.phone}
    `

    try {
      const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
      })

      if (!telegramResponse.ok) {
        console.error(`Telegram HTTP error! status: ${telegramResponse.status}`)
      } else {
        const telegramResult = await telegramResponse.json()
        console.log("Telegram response:", telegramResult)

        if (!telegramResult.ok) {
          console.error("Telegram API returned an error")
        }
      }
    } catch (telegramError) {
      console.error("Error sending message to Telegram:", telegramError)
    }
  }

  return (
    <div>
      <div className='footer' id='footer'>
        <div className='container-1'>
          <div className='box'>
            <div className='text'>
              <h4>Get a Call Back</h4>
            </div>
            <div>
              <div className='input'>
                <input
                  type="tel"
                  name="phone"
                  placeholder='Enter Your 10-digit Mobile No.'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <button onClick={handleFooterSubmit}>
                  Submit
                </button>
              </div>
              {formStatus === 'success' && <p className="success-message">Phone number submitted successfully!</p>}
              {formStatus === 'error' && <p className="error-message">{errorMessage}</p>}
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
                We are honored to have been recognized as the #1 travel company in the area for the past twenty-five years, renowned for our exceptional hospitality, services, and transportation. Our commitment is to provide personalized attention to both leisure and business travelers, ensuring that all your needs are met.
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
                  <a href="#home" >
                    Home
                  </a>
                </li>
                <li>
                  <a href="#locations">
                    Popular Locations
                  </a>
                </li>
                <li>
                  <a href="#packages">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#footer">
                    Contact
                  </a>
                </li>

              </ul>
            </div>
            <div className='list-3'>
              <div className='properties'>
                <h6 className='title'>
                  Featured
                </h6>
                <a href="#">
                  <img src="/assests/himachal_1_pck.jpg" alt="" />
                  <p>
                    We Are Leading Travel consulting Agency
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
                Near stop, Kelti, Himachal Pradesh Pin-code:171003
              </p>
              <p>
                <b>Hours: </b>
                Everyday, 10am–11pm
              </p>
              <p>
                <b>Phone: </b>
                07836098136
              </p>
            </div>
          </div>
          <div className='footer-bottom'>
            <p>
              © 2021 My Bharat Trips. All rights reserved | Designed by <a href="#">himachaltourguide.co.in</a>
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
