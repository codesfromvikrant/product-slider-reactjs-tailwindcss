import React from "react";

export default function Slidebtn({ leftSlide, rightSlide }) {

  return (
    <div className="">
      <div className="text-4xl text-gray-500 cursor-pointer hover:shadow-md bg-gray-200 shadow-xl py-6 px-4 rounded-md absolute top-1/2 left-10" onClick={leftSlide}><i className="fa fa-solid fa-caret-left"></i></div>
      <div className="text-4xl text-gray-500 cursor-pointer hover:shadow-md bg-gray-200 shadow-xl py-6 px-4 rounded-md absolute top-1/2 right-10" onClick={rightSlide}><i className="fa fa-solid fa-caret-right"></i></div>
    </div>
  )
}