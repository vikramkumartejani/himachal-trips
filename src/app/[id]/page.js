"use client";
import React from "react";
import { useParams } from "next/navigation"; // Import useParams from next/navigation
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EnquireForm from "../components/EnquireForm";
import DestinationDetail from "../components/DestinationDetail";
import Packages from "../components/Packages";

const SingleDestinationDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Navbar />
      <EnquireForm />
      <DestinationDetail id={id} />
      <Packages />
      <Footer />
    </>
  );
};

export default SingleDestinationDetails;
