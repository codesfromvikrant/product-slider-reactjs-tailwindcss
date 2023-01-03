import React from "react"

export default function Buttons() {
  return (
    <div className="flex justify-start items-center gap-3 mt-6">
      <button className="addtocart bg-red-500 text-white font-semibold py-2 px-6 rounded ">Add To Cart</button>
      <button className="wishlist text-gray-700 font-semibold border-gray-300 border-2 py-2 px-6 rounded">Add To Wishlist</button>
    </div>
  )
}