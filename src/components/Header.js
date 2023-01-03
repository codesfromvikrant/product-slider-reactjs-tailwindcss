import React from "react";

export default function Header() {
  return (
    <div className="bg-gray-200 fixed  w-full shadow-md z-50">
      <header className="max-w-6xl mx-auto flex justify-between items-center py-5">
        <div className="logo text-xl text-gray-700 font-extrabold uppercase tracking-widest">Accessories</div>

        <nav className="flex justify-center items-center gap-4 text-gray-700">
          <button className="font-semibold ">My Account</button>
          <i className="fa fa-solid fa-magnifying-glass text-lg"></i>
          <i className="fa fa-solid fa-cart-shopping text-lg"></i>
          <i className="fa fa-duotone fa-bars text-lg"></i>
          <i className="fa fa-solid fa-right-to-bracket text-lg"></i>
        </nav>
      </header >
    </div>
  )
}