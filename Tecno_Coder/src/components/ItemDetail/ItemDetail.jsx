import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css';

function ItemDetail({ product }) {
  const { addItem } = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);
  const [remainingStock, setRemainingStock] = useState(product.stock);

  const formattedPrice = product.price.toLocaleString(); 
  const handleAdd = (quantity, setCount) => {
    if (quantity > 0 && quantity <= remainingStock) {
      setItemCount(quantity);
      addItem(product, quantity);
      setRemainingStock(remainingStock - quantity);
      setCount(0);
    }
  };
  return (
    <div className="item-detail grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-white rounded-xl shadow-md overflow-hidden w-full">
      <div className="item-detail-image">
        <img src={`/images/${product.image}`} alt={product.title} className="w-full h-auto object-cover rounded-lg border-black border-4" /> 
      </div>

      <div className="item-detail-info p-4">
        <h2 className="text-2xl font-bold mb-8 text-center lg:text-left">{product.title}</h2>
        <p className="text-lg font-bold text-green-500 mb-4 text-right">${formattedPrice}</p> 

        <p className="text-gray-800 mt-4 mb-6"> 
          {product.detailedDescription}
        </p> 

        {remainingStock <= 5 && ( 
          <p className={`text-red-500 mb-4 text-left ${remainingStock > 0 ? '' : 'line-through'}`}> 
            {remainingStock > 0
              ? `🚨 ¡Últimos ${remainingStock} artículos!`
              : '🚫 ¡No hay stock disponible!'
            }
          </p>
        )}

        <ItemCount stock={remainingStock} initial={0} onAdd={handleAdd} />

        {itemCount > 0 && (
          <p className="text-green-600 mt-4">
            ¡Agregaste {itemCount} {product.title} al carrito!
          </p>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
