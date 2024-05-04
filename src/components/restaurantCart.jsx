import React, { useState } from "react";
import shawarma from "../assets/images/boston-shawarma.svg";
import starFilled from "../assets/images/solar_star-filled.svg";
import starNotfilled from "../assets/images/solar_star-unfilled.svg";
import minus from "../assets/images/solar_minus-square-linear.svg";
import plus from "../assets/images/solar_shield-plus-linear.svg";
import close from "../assets/images/close.svg";

export default function RestaurantCart() {
  const [rating, setRating] = useState(0);

  const handleClick = (event) => {
    const newRating = parseInt(event.target.dataset.index) + 1;
    setRating(newRating);
  };

  const newPrice = 5;
  const oldPrice = 7;

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const [selections, setSelections] = useState({ size: null, gravy: null });

  const handleOptionClick = (section, option) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [section]: option,
    }));
  };

  return (
    <div className="flex relative gap-20 px-14 mt-8 font-ibm-plex-sans">
      <div className="absolute bg-[#6EB356] rounded-full p-6 ">
        <p className="text-white">Sale!</p>
      </div>
      <section>
        <img src={shawarma} alt="shawarma" />
      </section>
      <main className="flex flex-col gap-3 ">
        <p className="text-[#1A1A1A] font-semibold text-2xl">
          Boston Chicken Shawarma <br /> wrap
        </p>
        <span className="flex gap-2 ">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <img
                className="cursor-pointer"
                key={index}
                src={index < rating ? starFilled : starNotfilled}
                alt="star"
                data-index={index}
                onClick={handleClick}
              />
            ))}
        </span>
        <div className="flex gap-5 font-medium text-xl">
          <p className="text-[#F05050] ">£{newPrice}.00</p>
          <p className=" text-[#ADADAD] line-through">£{oldPrice}.00</p>
        </div>
        <p className="text-[#1A1A1A] font-semibold text-[22px]">Description</p>
        <p className="text-[#ADADAD] text-base font-normal tracking-wider">
          Succulent chicken, marinated with traditional <br /> spices, is
          combined with crisp vegetables and <br /> creamy tahini sauce.
        </p>
        <div className="flex  justify-center gap-4 text-xl font-normal border border-gray-400 rounded-xl w-1/3  py-3">
          <img src={minus} onClick={handleDecrement} />
          <span className="count">{count}</span>
          <img src={plus} onClick={handleIncrement} />
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold text-[#6d6c6c]">Size</p>

            <label
              htmlFor="size-regular"
              className="flex items-center justify-between w-48 gap-2 border border-gray-400 text-sm font-normal text-[#858383] px-3 py-3 rounded-lg"
            >
              <p>Regular</p>
              <input
                type="radio"
                id="size-regular"
                name="size"
                value="regular"
                checked={selections.size === "regular"}
                onChange={() => handleOptionClick("size", "regular")}
                className={`cursor-pointer ${
                  selections.size === "regular" ? "filled" : ""
                }`}
              />
            </label>
            <label
              htmlFor="size-large"
              className="flex items-center justify-between w-48 gap-2 border border-gray-400 text-sm font-normal text-[#858383] px-3 py-3 rounded-lg"
            >
              <p>Large</p>
              <input
                type="radio"
                id="size-large"
                name="size"
                value="large"
                checked={selections.size === "large"}
                onChange={() => handleOptionClick("size", "large")}
                className={`cursor-pointer ${
                  selections.size === "large" ? "filled" : ""
                }`}
              />
            </label>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-base font-semibold text-[#6d6c6c]">Gravy</p>
            <label
              htmlFor="gravy-nice"
              className="flex items-center justify-between w-48 gap-2 border border-gray-400 px-3 py-3 rounded-lg text-sm font-normal text-[#858383]"
            >
              <p>Regular Gravy</p>
              <input
                type="radio"
                id="gravy-nice"
                name="gravy"
                value="nice"
                checked={selections.gravy === "nice"}
                onChange={() => handleOptionClick("gravy", "nice")}
                className={`cursor-pointer ${
                  selections.gravy === "nice" ? "filled" : ""
                }`}
              />
            </label>
            <label
              htmlFor="gravy-slow"
              className="flex items-center justify-between w-48 gap-2 border border-gray-400 text-sm font-normal text-[#858383] px-3 py-3 rounded-lg"
            >
              <p>Large Gravy</p>
              <input
                type="radio"
                id="gravy-slow"
                name="gravy"
                value="slow"
                checked={selections.gravy === "slow"}
                onChange={() => handleOptionClick("gravy", "slow")}
                className={`cursor-pointer ${
                  selections.gravy === "slow" ? "filled" : ""
                }`}
              />
            </label>
          </div>
        </div>
        <div className="flex gap-7 mt-4">
          <button className="border border-[#1A1A1A]  text-[#1A1A1A] font-medium text-base rounded-lg inline-flex py-4 w-40  px-8 justify-center items-center">
            Add to Cart
          </button>
          <button className="bg-[#F05050] rounded-lg font-medium text-base inline-flex py-4  px-8 w-40 justify-center items-center text-[#FFFFFF]">
            Buy now
          </button>
        </div>
      </main>
      <div className="cursor-pointer">
        <img src={close} alt="close" />
      </div>
    </div>
  );
}
