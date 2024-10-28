'use client'
import React from "react";
import Slider from "react-slick";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Review.css";
import { FcGoogle } from "react-icons/fc";


const reviews = [
  {
    name: "Rahul Thakur",
    review:
      "Just returned from an amazing tour of Himachal with Rishi Dadwal. The hotels were fabulous, and the attention to detail was impressive. Each place we visited was more beautiful than the last. The customer service was excellent. I highly recommend this package for anyone wanting to explore this stunning region.",
    rating: 5,
    image: "/assests/profile_review_5.png",
  },
  {
    name: "Sakshi sharma",
    review:
      "I recently went on a tour to Himachal with Shruti Thakur, visiting Manali, Shimla, and Dharamshala. It was absolutely fantastic The hotels were top-quality, providing comfort at every stop. The views in Manali were breathtaking. I highly recommend this tour package to everyone.",
    rating: 5,
    image: "/assests/review_img_1.png",
  },
  {
    name: "Shruti Kumari",
    review:
      "What an incredible experience exploring Himachal The tour was well organized, with great hotels and excellent customer service. The sights were stunning, especially in Manali.",
    rating: 5,
    image: "/assests/review_img_2.png",
  },
  {
    name: "Shruti Kumari",
    review:
      "Our Himachal tour was breathtaking The hotels were lovely, and the service was top-notch. The views in Shimla and Dharamshala were unforgettable. I recommend this tour package for anyone who wants to experience the beauty of Himachal comfortably.",
    rating: 5,
    image: "/assests/review_img_3.png",
  },
  {
    name: "Abhimanyu Kumar",
    review:
      "Just got back from an amazing trip to Himachal The hotels were fantastic, and the sights were spectacular. The customer service was great, making us feel appreciated throughout the trip. I highly recommend this tour package for anyone wanting a memorable experience.",
    rating: 5,
    image: "/assests/review_img_4.png",
  },
];

const Review = () => {
  const reviewData = [
    {
      profile: "/assests/profile_review_5.png",
      date: "12/08/2024 via Google",
      post: "I recently had the pleasure of booking a tour through Himachal Tourism, and the experience exceeded all my expectations.",
      rating: 5,
    },
    {
      profile: "/assests/review_img_1.png",
      date: "15/09/2024 via TripAdvisor",
      post: "The service was excellent, and I would highly recommend it to anyone looking for a great experience.",
      rating: 5,
    },
    {
      profile: "/assests/review_img_2.png",
      date: "15/09/2024 via TripAdvisor",
      post: "The service was excellent, and I would highly recommend it to anyone looking for a great experience.",
      rating: 5,
    },
    {
      profile: "/assests/review_img_3.png",
      date: "15/09/2024 via TripAdvisor",
      post: "The service was excellent, and I would highly recommend it to anyone looking for a great experience.",
      rating: 5,
    },
    {
      profile: "/assests/review_img_4.png",
      date: "15/09/2024 via TripAdvisor",
      post: "The service was excellent, and I would highly recommend it to anyone looking for a great experience.",
      rating: 5,
    },

  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <img src={review.image} alt={review.name} className="review-image" />
                <h3>{review.name}</h3>
                <div className="stars">
                  {"★".repeat(review.rating)}
                </div>
                <FcGoogle size={20} className="mb-4" />
                <p>{review.review}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Review;
