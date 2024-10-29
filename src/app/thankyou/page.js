import React from 'react'
import Link from 'next/link'
import './../../styles/Thankyou.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ThankYou() {
  return (

    <div>
      <Navbar />
      <div className="thank-you-container">
        <div className="thank-you-card">
          <div className="card-content">
            <div className="checkmark-container">
              <svg className="checkmark" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
              </svg>
            </div>
            <h1>Thank You!</h1>
            <p className="subtitle">Your enquiry has been successfully submitted.</p>
            <div className="message">
              <p>We appreciate your interest in Himachal Trips.</p>
              <p>Our team will review your enquiry and get back to you as soon as possible with a customized tour quote.</p>
            </div>
            <Link href="/" className="home-button">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}