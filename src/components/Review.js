'use client'
import React from "react";
import Slider from "react-slick";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../styles/Review.css";

const reviews = [
  {
    name: "Elizabeth Senter",
    review:
      "They serve Counter Culture coffee and make really great chai! They have pastries but no bagels and some other items.",
    rating: 5,
    image: "/assests/profile.png",
  },
  {
    name: "Anna Laskowska",
    review:
      "Yummy coffee and friendly staff. Multiple counter culture roasts available.",
    rating: 5,
    image: "/assests/profile.png",
  },
  {
    name: "Anupul Chaudhary",
    review:
      "It is a nice place for a quick coffee or a snack. Located beside the Heath Science Library on South Columbia street, this place provides th...",
    rating: 4,
    image: "/assests/profile.png",
  },
  {
    name: "James Taylor",
    review:
      "The service was great, location is wonderful, but we were disappointed in the selection of small sweets and baked items available.",
    rating: 4,
    image: "/assests/profile.png",
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
