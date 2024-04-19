import React from 'react';
import './CategoryList.css';

function CategoryList() {
  return (
    <div className="category-list">
      <ul className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <li className="border p-4 rounded-lg">
          <a href="/#" className="category-link">Computadoras</a>
        </li>
        <li className="border p-4 rounded-lg">
          <a href="/#" className="category-link">Smartphones </a>
        </li>
        <li className="border p-4 rounded-lg">
          <a href="/#" className="category-link">Accesorios  </a>
        </li>
        <li className="border p-4 rounded-lg">
          <a href="/#" className="category-link">Televisores </a>
        </li>
      </ul>
    </div>
  );
}

export default CategoryList;
