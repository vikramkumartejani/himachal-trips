import React from "react";
import "../../styles/DestinationDetail.css";
import { packagesData } from "../../../public/PackagesData/packagesData";

const DestinationDetail = ({ id }) => {
  console.log("id id id :", id);

  // Convert id to a number to ensure type consistency
  const packageId = Number(id);

  // Find the package data by id
  const packageDetails = packagesData.find(
    (packageItem) => packageItem.id === packageId
  );

  if (!packageDetails) {
    return <div>Package not found.</div>;
  }

  return (
    <div>
      <div className="destination-detail-main">
        <div className="destination-detail-container">
          <div className="destination-detail-box">
            <h4>{packageDetails.title}</h4>
            {packageDetails.details.map((dayDetail, index) => (
              <div key={index}>
                <h5>{dayDetail.day}</h5>
                <p>{dayDetail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
