'use client'

import React, { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { FaCheckCircle } from "react-icons/fa"
import './../styles/EnquireForm.css'

export default function EnquireForm() {
  const [formStatus, setFormStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef(null)
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()
    setFormStatus('submitting')
    setErrorMessage('')
    
    if (!formRef.current) {
      setFormStatus('error')
      setErrorMessage('An unexpected error occurred. Please try again.')
      return
    }

    const formData = new FormData(formRef.current)

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
        formRef.current.reset()

        // Send message to Telegram
        const botToken = "7953446645:AAGMjGBx1cotqlXIWci7PraNNJZLS6nKgWk"
        const chatId = "148013002"

        const telegramMessage = `
        New Form Submission:
        Name: ${object.fullName}
        Email: ${object.email}
        Phone: ${object.phone}
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
            throw new Error(`HTTP error! status: ${telegramResponse.status}`)
          }

          const telegramResult = await telegramResponse.json()
          console.log("Telegram response:", telegramResult)

          if (!telegramResult.ok) {
            throw new Error("Telegram API returned an error")
          }

          router.push('/thankyou')
        } catch (telegramError) {
          console.error("Error sending message to Telegram:", telegramError)
          setErrorMessage("Form submitted, but there was an error notifying our team. We'll get back to you soon.")
        }
      } else {
        console.error("Web3Forms submission error:", result)
        setFormStatus('error')
        setErrorMessage(result.message || "There was an error submitting the form. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus('error')
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        setErrorMessage("Network error. Please check your internet connection and try again.")
      } else {
        setErrorMessage(`An unexpected error occurred: ${error.message}`)
      }
    } finally {
      // Clear status after 10 seconds
      setTimeout(() => {
        setFormStatus(null)
        setErrorMessage('')
      }, 10000)
    }
  }

  return (
    <div>
      <div className='form-main'>
        <div className='form-container'>
          <div className='form-info'>
            <h3>Himachal Trips</h3>
            <p>Tourism is a social, cultural and economic phenomenon which entails the movement of people to countries or places outside their usual environment for personal or business/professional purposes. <br />Tourism generates income and creates training opportunities and easily accessible jobs, as well as sales markets for services and local products.</p>
          </div>
          <div className='main-form-container'>
            <div className='form'>
              <h3>
                Enquire Now!
              </h3>
              <p>
                <i className='check-icon'><FaCheckCircle color='#ff8810' /></i>
                100% Customized Tour Quotes for Himachal Tourism Holiday Packages
              </p>
              <p>
                <i className='check-icon'><FaCheckCircle color='#ff8810' /></i>
                Simply fill the form & let our tour advisor contact you & provide you best deal
              </p>
              <form onSubmit={handleSubmit} ref={formRef}>
                <div className='form-input'>
                  <input type="text" name="fullName" placeholder='Enter Your Name' required />
                </div>
                <div className='form-input'>
                  <input type="email" name="email" placeholder='Enter Your Email' required />
                </div>
                <div className='form-input'>
                  <input type="tel" name="phone" placeholder='Enter Your 10-digit Mobile No.' required />
                </div>
                <button type="submit" className='form-btn' disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'Submitting...' : 'SUBMIT'}
                </button>
              </form>
              {formStatus === 'success' && (
                <p className="success-message">Form submitted successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="error-message">{errorMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}