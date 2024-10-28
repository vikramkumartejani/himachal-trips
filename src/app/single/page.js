import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EnquireForm from '../components/EnquireForm';
import DestinationDetail from './../components/DestinationDetail'
import Packages from '../components/Packages';

const SingleDestinationDetails = () => {
  return (
    <>
      <Navbar/>
      <EnquireForm/>
      <DestinationDetail/>
      <Packages/>
      <Footer/>
    </>
  )
}

export default SingleDestinationDetails;