import React from "react";
import { useStateValue } from "../components/StateProvider";
import { getBasketTotal } from "../components/reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  return (
    <div className="subtotal">
      <p>
        {/* Part of the homework */}
        Subtotal ({basket.length} items): <strong>{formatCurrency(getBasketTotal(basket))}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
