import React from "react";
import Buttons from "./Buttons";

export default function Productdetails({ id, brandname, title, stars, ratings, price, emi }) {
  return (
    <div className="pt-28 px-12 relative">
      <h3 className="text-3xl font-bold text-gray-800">{brandname}</h3>
      <h4 className="text-lg text-gray-500">{title}</h4>

      <div className="rating  flex justify-start items-center gap-4  my-3 w-max">
        <div className="stars border-gray-200 border-2 py-1 px-3 rounded">
          <p className="text-gray-700 font-semibold">{stars} <i className="fa fa-sharp fa-solid fa-star text-amber-700"></i></p>
        </div>
        <div className="rate border-gray-200 border-2 py-1 px-3 rounded">
          <p className="text-gray-700 font-semibold">{ratings} Ratings</p>
        </div>
      </div>

      <div className="price text-xl font-semibold text-gray-900">Rs. {price}</div>
      <p className="text-gray-500 font-medium text-sm">Inclusive of all taxes</p>

      <p className="text-lg uppercase font-bold text-gray-700 pt-6">Select Size (Indian Size)</p>
      <div className="flex justify-start items-center gap-3">
        <div className="h-12 w-12 border-gray-300 border-2 rounded-full flex justify-center items-center font-medium cursor-pointer">6</div>
        <div className="h-12 w-12 border-gray-300 border-2 rounded-full flex justify-center items-center font-medium cursor-pointer">7</div>
        <div className="h-12 w-12 border-gray-300 border-2 rounded-full flex justify-center items-center font-medium cursor-pointer">8</div>
        <div className="h-12 w-12 border-gray-300 border-2 rounded-full flex justify-center items-center font-medium cursor-pointer">9</div>
        <div className="h-12 w-12 border-gray-300 border-2 rounded-full flex justify-center items-center font-medium cursor-pointer">10</div>
        <div className="h-12 w-12 border-gray-300 border-2 rounded-full flex justify-center items-center font-medium cursor-pointer">11</div>
        <div className="h-12 w-12 border-gray-300 border-2 rounded-full flex justify-center items-center font-medium cursor-pointer">12</div>
      </div>

      <Buttons />

      <ul className="my-4">
        <h4 className="text-lg text-gray-800 font-bold">Delievery Options</h4>
        <li className="text-sm text-gray-600">100% Original Products</li>
        <li className="text-sm text-gray-600">Pay on Delievery might be available</li>
        <li className="text-sm text-gray-600">Easy 30 days return and exchanges</li>
        <li className="text-sm text-gray-600">Try & Buy might be available</li>
      </ul>

      <ul>
        <h4 className="text-lg text-gray-800 font-bold">EMI options available</h4>
        <li className="list-disc ml-8 text-gray-600 text-sm">EMI starting from Rs {emi}/month</li>
      </ul>
    </div>
  )
}