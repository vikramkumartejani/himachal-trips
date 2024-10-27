import React from "react";
import "./../styles/Locations.css";

const Locations = () => {
  const locationData = [
    {
      title: "Shimla",
      post: "2 Listings",
      image: "/assests/shimla.jpg",
    },
    {
      title: "Manali",
      post: "2 Listings",
      image: "/assests/manali-2.jpg",
    },
    {
      title: "Amritsar",
      post: "2 Listings",
      image: "/assests/golden-temple-1.jpg",
    },
    {
      title: "Dharamshala",
      post: "2 Listings",
      image: "/assests/dharamshala.jpg",
    },
    {
      title: "Khajjiar",
      post: "2 Listings",
      image: "/assests/chamba.jpg",
    },
    {
      title: "Kullu",
      post: "2 Listings",
      image: "/assests/kaza.jpg",
    },
  ];
  return (
    <div className="">
      <div className="location-main">
        <div className="location-container">
          <div className="location-heading">
            <h3>Popular Locations</h3>
            <p>
              Want the perfect vacation in Himachal Pradesh but
              don’t know where to start?
              Let us plan your trip for you!
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
