"use client"
import React, { useState, useRef, useCallback } from 'react'
import '../../styles/EnquiryModal.css';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

const EnquiryModel = ({ closeModal }) => {
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

        // Send message to Telegram asynchronously
        sendTelegramNotification(object)
      } else {
        throw new Error(result.message || "There was an error submitting the form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus('error')
      setErrorMessage(error.message)
    }
  }, [phone])

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
    <div className='modal-main-container'>
      <div className='modal-background'>
        <div className='modal-container'>
          <Image src='/assests/modal-image.png' alt='t' width={300} height={200} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', borderRadius:'10px' }} />

          <div className='modal-body'>
            <div className='modal-header'>
              <h4 style={{textAlign:"center"}}>Save up to 30% this Winter Season & Summer Vacation!</h4>
            </div>
            <form style={{ width: '100%' }} >
              <div className='modal-input'>
                <input type="tel"
                  placeholder='Enter Your 10-digit Mobile No.'
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required />
              </div>
              {formStatus === 'success' && <p className="success-message">Phone number submitted successfully!</p>}
              {formStatus === 'error' && <p className="error-message">{errorMessage}</p>}
              <button onClick={handleFooterSubmit}  className='modal-submit-btn'>Submit</button>
              <button onClick={closeModal} className='no-thanks'>No Thanks</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModel;
