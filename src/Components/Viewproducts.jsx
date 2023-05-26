import React, { useState } from "react";
import "./style.css";
import { Icon } from "@iconify/react";
import 'iconify-icon';
const Viewproducts = ({
  list,
  setList,
  viewList,
  showFavorites,
  setShowFavorites,
  favourites,
  setFavourites,
}) => {
  const [btnColor, setBtnColor] = useState("grey");
  const handleFavourite = (item) => {
    const existingIndex = favourites.findIndex(
      (favItem) => favItem.name === item.name
    );
    if (existingIndex !== -1) {
      setFavourites((prevFavourites) =>
        prevFavourites.filter((favItem) => favItem.name !== item.name)
      );
      //  buttonColor +="button-grey";
      // onFavouriteClick(item, false);
    } else {
      setFavourites((prevFavourites) => [...prevFavourites, item]);
      // onFavouriteClick(item, true);
      // buttonColor +="button-red";
    }
    console.log(existingIndex);
  };
  console.log(favourites);

  return (
    <div>
      {viewList.map((product) => {
        return (
          <div className="data">
            <div className="sub">
              <div className="sub1">
                <p> {product.name} </p>
             
                  {" "}
                
                 {product.name}:{product.description}<br/>  
                 <button
                    onClick={() => {
                      btnColor === "red"
                        ? setBtnColor("gray")
                        : setBtnColor("red");
                    }}
                    style={{ backgroundColor: btnColor }}
                  >
                    <Icon
                      icon="mdi:heart"
                     
                    />
                  </button>
                 {/* <ion-icon name="heart"  className={product.favourite ? "red" : "gray"}
                        onClick={() => handleFavourite(product)}></ion-icon> */}
                   {/* <button  className={product.favourite ? "red" : "gray"}
                       onClick={() => handleFavourite(product)}
                    >  <iconify-icon 
                    icon="mdi:heart"
                   
                  ></iconify-icon>    </button> */}
                    {/* <button  className={product.favourite ? "red" : "gray"}
                        onClick={() => handleFavourite(product)}>
                      <iconify-icon 
                        icon="teenyicons:heart-circle-solid"
                       
                      ></iconify-icon>
                      </button> */}
                
                  
              </div>
              <div className="sub2">
                <p> Rate:{product.rate}</p>
                <p> Quantity:{product.quantity}</p>
                <p> Discount:{product.discount}</p>
              </div>{" "}
            </div>
            {/* <div className="sub3">
              <ul type="none">
                {" "}
                <li>
                  {product.name}:{product.description}
                  <button
                    onClick={() => {
                      btnColor === "red"
                        ? setBtnColor("gray")
                        : setBtnColor("red");
                    }}
                    style={{ backgroundColor: btnColor }}
                  >
                    <Icon
                      icon="mdi:heart"
                      className={product.favourite ? "red" : "gray"}
                      onClick={() => handleFavourite(product)}
                    />
                  </button>
                </li>
              </ul>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};
export { Viewproducts };
