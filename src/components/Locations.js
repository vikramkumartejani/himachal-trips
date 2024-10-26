import React from "react";
import "./../styles/Locations.css";

const Locations = () => {
  const locationData = [
    {
      title: "Shimla",
      post: "2 Listings",
      image: "/assests/g1.jpg",
    },
    {
      title: "Manali",
      post: "2 Listings",
      image: "/assests/g2.jpg",
    },
    {
      title: "Amritsar",
      post: "2 Listings",
      image: "/assests/g3.jpg",
    },
    {
      title: "Dharamshala",
      post: "2 Listings",
      image: "/assests/g4.jpg",
    },
    {
      title: "Khajjiar",
      post: "2 Listings",
      image: "/assests/g5.jpg",
    },
    {
      title: "Kullu",
      post: "2 Listings",
      image: "/assests/g6.jpg",
    },
  ];
  return (
    <div className="">
      <div className="location-main">
        <div className="location-container">
          <div className="location-heading">
            <h3>Popular Locations</h3>
            <p>
              Are you dreaming of the perfect vacation at Himachal Pradesh but
              have no idea where to start planning? Clueless about costs? And
              not sure what to do once you get there? Let us plan your trip for
              you.
            </p>
          </div>
          <div className="box-row">
            {locationData.map((location, index) => (
              <div key={index} className="box-container">
                <div className="box-main">
                  <img src={location.image} alt="" />
                  <div className="box-content">
                    <h3 className="box-title">{location.title}</h3>
                    <span className="box-post">{location.post}</span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
