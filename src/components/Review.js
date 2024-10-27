'use client'
import React from "react";
import dynamic from "next/dynamic";
import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../styles/Review.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Review = () => {
  const reviewData = [
    {
      profile: "/assests/akshay_profile.png",
      date: "12/08/2024 via Google",
      post: "I recently had the pleasure of booking a tour through Himachal Tourism, and the experience exceeded all my expectations.",
      rating: 5,
    },
    {
      profile: "/assests/profile.png",
      date: "15/09/2024 via TripAdvisor",
      post: "The service was excellent, and I would highly recommend it to anyone looking for a great experience.",
      rating: 5,
    },
    {
      profile: "/assests/profile.png",
      date: "15/09/2024 via TripAdvisor",
      post: "The service was excellent, and I would highly recommend it to anyone looking for a great experience.",
      rating: 5,
    },
    {
      profile: "/assests/profile.png",
      date: "15/09/2024 via TripAdvisor",
      post: "The service was excellent, and I would highly recommend it to anyone looking for a great experience.",
      rating: 5,
    },
    {
      profile: "/assests/profile.png",
      date: "15/09/2024 via TripAdvisor",
      post: "The service was excellent, and I would highly recommend it to anyone looking for a great experience.",
      rating: 5,
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="review-main">
      <div className="review-container">
        <div className="review-heading">
          <h3>Happy Clients</h3>
          <p>
            Personalized Services | Best Price and Value | Locals do better job
            | Reliability | Customer Support.
          </p>
        </div>

        <div className="review-box">
          <Slider {...settings}>
            {reviewData.map((review, index) => (
              <div key={index} className="review-box-main">
                <div className="review-content">
                  <img src={review.profile} alt="Client profile" />
                  <p>{review.date}</p>
                  <div className="star-icon">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p>{review.post}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
