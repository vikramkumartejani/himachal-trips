'use client'

import React, { useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { FaCheckCircle } from "react-icons/fa"
import '../../styles/EnquireForm.css'

export default function EnquireForm() {
  const [formStatus, setFormStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const formRef = useRef(null)
  const router = useRouter()

  const handleSubmit = useCallback(async (event) => {
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

        // Redirect to thank you page immediately after form submission
        router.push('/thankyou')

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
  }, [router])

  const sendTelegramNotification = async (formData) => {
    const botToken = "7953446645:AAGMjGBx1cotqlXIWci7PraNNJZLS6nKgWk"
    const chatId = "148013002"

    const telegramMessage = `
    New Form Submission:
    Name: ${formData.fullName}
    Email: ${formData.email}
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
      <div className='form-main' id='home'>
        <div className='form-container'>
          <div className='form-info'>
            <h3>Himachal Tour Packages </h3>
            <p>SHIMLA | KULLU | MANALI | DHARAMSHALA | DALHOUSIE | KHAJIYAAR | SOLANG </p>
          </div>
          <div className='main-form-container'>
            <div className='form-container-border card-border-wide'>
              <div className='form'>
                <h3>
                  Enquire Now!
                </h3>
                <p>
                  <i className='check-icon'><FaCheckCircle color='#ff8810' /></i>
                  Get 100% customized tour quotes for holiday packages in Himachal Pradesh.
                </p>
                <p>
                  <i className='check-icon'><FaCheckCircle color='#ff8810' /></i>
                  Just fill out the form, and our tour advisor will get in touch to offer you the best deal.
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
                  <button
                    type="submit"
                    className={`form-btn ${formStatus === 'submitting' ? 'submitting' : formStatus === 'submitted' ? 'submitted' : ''}`}
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : formStatus === 'submitted' ? 'Submitted' : 'SUBMIT'}
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
    </div>
  )
}