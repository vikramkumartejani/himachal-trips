"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import EnquiryModel from "./EnquiryModel";
import { packagesData } from "../../../public/PackagesData/packagesData";
import { FaBed, FaBath, FaShareSquare } from "react-icons/fa";
import "../../styles/Packages.css";

const Packages = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const handleEnquiryClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div className="packages-main" id="packages">
        <div className="packages-container">
          <div className="packages-heading">
            <h3>Himachal Tour Packages on sale</h3>
            <p>
              Book Instantly and avail special discount in all packages shown
              below.
            </p>
          </div>
          <div className="packages-row">
            {packagesData.map((packageData) => (
              <div key={packageData.id} className="package-data-container">
                <a href="#" className="location-image">
                  <img src={packageData.image} alt="" />
                </a>
                <ul className="top-btn">
                  <li className="sale">On Sale</li>
                  <li className="winter">Winter Offer</li>
                </ul>
                <div className="package-detail">
                  <h5 className="package-title">
                    <a href="#">{packageData.title}</a>
                  </h5>
                  <p className="package-price">{packageData.price}</p>
                  <ul className="package-time">
                    <li>
                      <FaBed color="#ff8810" className="package-time-logo" />
                      {packageData.nights}
                    </li>
                    <li>
                      <FaBath color="#ff8810" className="package-time-logo" />
                      {packageData.days}
                    </li>
                    <li>
                      <FaShareSquare
                        color="#ff8810"
                        className="package-time-logo"
                      />
                      {packageData.person}
                    </li>
                  </ul>
                  <div className="btns-packages">
                    <button
                      className="package-btns"
                      onClick={handleEnquiryClick}
                    >
                      Enquiry Now
                    </button>
                    <button
                      className="package-btns"
                      onClick={() => router.push(`/${packageData.id}`)}
                    >
                      View Details
                    </button>
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
