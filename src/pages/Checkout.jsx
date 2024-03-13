import React, { useEffect, useState } from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "../components/StateProvider";
import CheckoutProduct from "../components/checkProd";
import { firestore } from "../../backend/firebase"; // Assuming you've exported firestore from firebase.js

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [basketData, setBasketData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const basketRef = firestore.collection("ProductsPage");
      const snapshot = await basketRef.get();
      const data = snapshot.docs.map(doc => doc.data());
      setBasketData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basketData.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
