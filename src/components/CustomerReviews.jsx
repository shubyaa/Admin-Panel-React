import React, { useRef } from "react";
import SectionTitle from "./SectionTitle";
import CarouselButtons from "./CarouselButtons";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Slider from "react-slick";
import StarRatingComponent from "react-star-rating-component";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { food, profile_img } from "../assets";

const CustomerReviews = () => {
  const sliderRef = useRef(null);

  const reviewData = [
    {
      key: 1,
      reviews:
        "Very very worst service by Zomato always I order tiffin mrng but order came for lunch and customer care is also nt at all responding fr chat r calls very very worst service don’t choose Zomato again frnds very worst service",
      name: "Shubham Pednekar",
      rating: 3,
    },
    {
      key: 2,

      reviews:
        "Last 3-4 orders not delivered on time and service response is also pathetic, if you don't have people for delivery simply don't accept orders. Every delivery guy is taking 2-3 orders and every time they say some problem in bike so order is delayed.",
      name: "Poonam Pednekar",
      rating: 4,
    },
    {
      key: 3,

      reviews:
        "Today was my 1st order in zomato and also received exclusive offer of discount of rupees 150 but yet, order number: 4959610853 costed me very expensive, due to the lack of proper delivery by the zomato, poor restaurant packaging.",
      name: "Shradnya Daddekar",
      rating: 2,
    },
    {
      key: 4,
      reviews:
        "Very very worst service by Zomato always I order tiffin mrng but order came for lunch and customer care is also nt at all responding fr chat r calls very very worst service don’t choose Zomato again frnds very worst service",
      name: "Shamrao Pednekar",
      rating: 5,
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };

  const nextChange = () => {
    sliderRef.current.slickNext();
  };
  const prevChange = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className=" flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <SectionTitle
          title="Customer Review"
          desc="Reviews based on the product they received"
        />

        <CarouselButtons onNextClick={nextChange} onPrevClick={prevChange} />
      </div>

      <Slider ref={sliderRef} {...settings} className=" py-5">
        {reviewData.map((item) => (
          <ReviewCard
            key={item.key}
            reviews={item.reviews}
            name={item.name}
            rating={item.rating}
          />
        ))}
      </Slider>
    </div>
  );
};

const ReviewCard = (props) => (
  <div
    className=" flex flex-row justify-between p-10 items-start
   bg-white rounded-[15px] h-[270px] min-w-[600px] max-w-[600px] relative"
  >
    <div className=" flex flex-col items-start">
      <div className=" flex flex-row items-center">
        <img
          src={profile_img}
          alt="Image"
          className=" sm:w-[60px] w-[54px] sm:h-[60px] h-[54px]  rounded-full sm:p-2 p-1 mr-3"
        />
        <div className=" flex flex-col">
          <h2 className=" text-[21px] font-poppins font-medium text-gray-800">
            {props.name}
          </h2>
          <h5 className=" text-[15px] font-poppins text-gray-600">
            2 Days ago
          </h5>
        </div>
      </div>
      <p className="flex max-w-[400px] font-poppins text-[14px] mt-4">
        {props.reviews}
      </p>
      <StarRatingComponent
        name="ratings"
        value={props.rating}
        starCount={5}
        starColor="#F7C604"
        emptyStarColor="#B9BBBD"
        editing={false}
      />
    </div>
    <div>
      <img
        src={food}
        alt=""
        className=" absolute self-center top-5 right-[-120px]"
      />
    </div>
  </div>
);

export default CustomerReviews;
