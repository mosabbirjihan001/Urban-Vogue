import React from 'react';
import ProductCard from './ProductCard';
import productData from '../data/productData';

function MenSection() {
  const products = productData.men; // Get men's products from the data

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default MenSection;