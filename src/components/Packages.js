"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import EnquiryModel from "./EnquiryModel";

import { FaBed, FaBath, FaShareSquare } from "react-icons/fa";
import "./../styles/Packages.css";

const Packages = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const router = useRouter()

  const packagesData = [
    {
      title: "Shimla Manali 5N 6D Tour by Volvo",
      price: "Start @ ₹ 4999 /-",
      image: "/assests/g7.jpg",
      nights: "5 Nights",
      days: "6 Days",
      person: "Per Person",
    },
    {
      title: "Shimla Manali 5N 6D Tour by Cab",
      price: "Start @ ₹ 6500 /-",
      image: "/assests/g17.jpg",
      nights: "5 Nights",
      days: "6 Days",
      person: "Per Person",
    },
    {
      title: "Complete Himachal 8N 9D Tour by Cab",
      price: "Start @ ₹ 16777 /-",
      image: "/assests/g15.jpg",
      nights: "8 Nights",
      days: "9 Days",
      person: "Per Person",
    },
    {
      title: "Complete Himachal 9N 10D With Amritsar",
      price: "Start @ ₹ 17999 /-",
      image: "/assests/g16.jpg",
      nights: "9 Nights",
      days: "10 Days",
      person: "Per Person",
    },
    {
      title: "Complete Himachal 8N 9D Honeymoon Tour by Cab",
      price: "Start @ ₹ 24750 /-",
      image: "/assests/g9.jpg",
      nights: "8 Nights",
      days: "9 Days",
      person: "Per Person",
    },
    {
      title: "Complete Himachal Honeymoon With Amritsar",
      price: "Start @ ₹ 25949 /-",
      image: "/assests/g10.jpg",
      nights: "9 Nights",
      days: "10 Days",
      person: "Per Person",
    },
  ];

  const handleEnquiryClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <div className="packages-main">
        <div className="packages-container">
          <div className="packages-heading">
            <h3>Himachal Tour Packages on sale</h3>
            <p>
              Book Instantly and avail special discount in all packages shown
              below.
            </p>
          </div>
          <div className="packages-row">
            {packagesData.map((packages, index) => (
              <div key={index} className="package-data-container">
                <a href="#" className="location-image">
                  <img src={packages.image} alt="" />
                </a>
                <ul className="top-btn">
                  <li className="sale">On Sale</li>
                  <li className="winter">Winter Offer</li>
                </ul>
                <div className="package-detail">
                  <h5 className="package-title">
                    <a href="#">{packages.title}</a>
                  </h5>
                  <p className="package-price">{packages.price}</p>
                  <ul className="package-time">
                    <li>
                      <FaBed color="#ff8810" className="package-time-logo" />
                      {packages.nights}
                    </li>
                    <li>
                      <FaBath color="#ff8810" className="package-time-logo" />
                      {packages.days}
                    </li>
                    <li>
                      <FaShareSquare
                        color="#ff8810"
                        className="package-time-logo"
                      />
                      {packages.person}
                    </li>
                  </ul>
                  <div className="btns-packages">
                    <button className="package-btns" onClick={handleEnquiryClick}>
                      Enquiry Now
                    </button>
                    <button className="package-btns" onClick={(() => router.push('/singledestinationdetails'))}>View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && <EnquiryModel closeModal={closeModal} />}
    </div>
  );
};

export default Packages;
