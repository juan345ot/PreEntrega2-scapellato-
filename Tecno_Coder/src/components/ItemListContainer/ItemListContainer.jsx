import React from 'react';
import './ItemListContainer.css';

function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container p-4 md:max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <p className="text-lg md:text-xl lg:text-2xl font-bold">{greeting}</p> 
    </div>
  );
}

export default ItemListContainer;
