import React from "react";
import "../../styles/Locations.css";

const Locations = () => {
  const locationData = [
    { title: "Shimla", post: "2 Listings", image: "/assests/shimla_pck.jpg" },
    { title: "Manali", post: "2 Listings", image: "/assests/manali_lct.jpg" },
    { title: "Amritsar", post: "2 Listings", image: "/assests/golden_temple_pck.png" },
    { title: "Dharamshala", post: "2 Listings", image: "/assests/dharamshala_lck.jpg" },
    { title: "Khajjiar", post: "2 Listings", image: "/assests/kaza_lct.jpg" },
    { title: "Kullu", post: "2 Listings", image: "/assests/kullu_lck.jpg" },
  ];

  return (
    <div className="location-main" id="locations">
      <div className="location-container">
        <div className="location-heading">
          <h3>Popular Locations</h3>
          <p>
            Want the perfect vacation in Himachal Pradesh but don&apos;t know
            where to start? Let us plan your trip for you!
          </p>
        </div>
        <div className="box-row">
          {locationData.map((location, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={location.image} alt={location.title} />
                  <div className="box-content">
                    {/* <h3 className="box-title">{location.title}</h3>
                    <span className="box-post">{location.post}</span> */}
                  </div>
                </div>
                <div className="flip-card-back">
                  <img src={location.image} alt={location.title} />
                  <div className="box-content">
                    <h3 className="box-title">{location.title}</h3>
                    <span className="box-post">{location.post}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
