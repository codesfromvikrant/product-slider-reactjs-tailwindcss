import React from "react";

import Slidebtn from "./Slidebtn";

export default function Products({ imgPath, leftSlide, rightSlide }) {

  return (
    <div className="w-1/2 h-[100vh] bg-gray-100 relative">
      <center><img src={imgPath} alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" /></center>
      <Slidebtn
        leftSlide={leftSlide}
        rightSlide={rightSlide} />
    </div>
  )
}