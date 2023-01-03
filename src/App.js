import React, { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Productdetails from "./components/Productdetails";
import data from "./data"

const App = () => {
  const [id, setId] = useState(2);

  const rightSlide = () => {
    if (id < data.length) {
      let x = id;
      x++;
      setId(prevId => prevId = x);
    } else {
      setId(1)
    }
  }

  const leftSlide = () => {
    if (id > 1) {
      let x = id;
      x--;
      setId(prevId => prevId = x);
    } else {
      setId(data.length)
    }
  }
  const newProduct = data.filter((el) => el.id == id).map((el) => {
    return (
      <div className="flex justify-start">
        <Products
          imgPath={el.imgPath}
          leftSlide={leftSlide}
          rightSlide={rightSlide}
        />
        <Productdetails
          key={el.id}
          id={el.id}
          brandname={el.brandname}
          title={el.title}
          stars={el.stars}
          ratings={el.ratings}
          price={el.price}
          emi={el.emistarting}
        />
      </div>
    )
  });

  return (
    <div>
      <Header />
      {newProduct}
    </div>
  )
}

export default App;