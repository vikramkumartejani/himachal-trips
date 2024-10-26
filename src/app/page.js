'use client'
import React, { useEffect, useState } from 'react';
import Navbar from './../components/Navbar'
import EnuireForm from './../components/EnquireForm'
import Locations from './../components/Locations'
import Offer from './../components/Offer'
import Packages from './../components/Packages'
import ApplyInfo from './../components/ApplyInfo'
import Review from './../components/Review'
import Specification from './../components/Specification'
import Footer from './../components/Footer'
import EnquiryModel from '../components/EnquiryModel'

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  let timeoutId; 

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 10000);  

    return () => clearTimeout(timeoutId);
  }, []);

  const closeModal = () => {
    setShowModal(false);

    timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 600000); 
  };
  return (
   <>
     <Navbar/>
     <EnuireForm/>
     <Packages/>
     <Offer/>
     <Locations/>
     <ApplyInfo/>
     <Review/>
     <Specification/>
     <Footer/> 
     {showModal && (
        <div>
          <EnquiryModel closeModal={() => setShowModal(false)} />
        </div>
      )}
   </>
  );
}
