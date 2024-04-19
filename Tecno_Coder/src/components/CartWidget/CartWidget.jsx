import React from 'react';
import './CartWidget.css';
import CartIcon from '../CartIcon/CartIcon';

function CartWidget() {
  const itemCount = 3;

  return (
    <div className="flex items-center">
      <CartIcon width="40" height="40" />
      <span className="text-xl md:text-2xl lg:text-3xl font-bold ml-2">{itemCount}</span>
    </div>
  );
}

export default CartWidget;
