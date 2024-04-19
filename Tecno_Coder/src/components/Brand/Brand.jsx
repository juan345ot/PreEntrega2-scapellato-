import React from 'react';
import './Brand.css';

function Brand() {
  return (
    <a href="/#" className="brand-link">
      <h1 className="brand text-xl md:text-2xl lg:text-3xl" style={{ marginBottom: '1rem' }}>
        Tecno<span className="coder">-Coder</span>
      </h1>
    </a>
  );
}

export default Brand;
