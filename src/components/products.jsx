import React from "react";
import { useStateValue } from "./StateProvider";
import { storage, firestore } from "../../backend/firebase"; // Import the firestore object from your firebase.js file

function ProductCard({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });

    // Add the product data to Firebase Firestore
    firestore.collection("ProductsPage").add({ // Using firestore from firebase.js to access collection
      id: id,
      title: title,
      image: image,
      price: price,
      rating: rating,
    });
  };

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <div className="bg-white ">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" className="product__image object-contain w-48 h-48" />

      <button onClick={addToBasket} className="mt-4 bg-yellow-400 border border-yellow-700 text-yellow-900 px-4 py-2 rounded-md">
        Add to Basket
      </button>
    </div>
  );
}

export default ProductCard;
