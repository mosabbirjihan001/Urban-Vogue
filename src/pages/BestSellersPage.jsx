import React from 'react';
import ProductCard from '../components/ProductCard';
import productData from '../data/productData'; // Adjust path if needed

function BestSellersPage() {
  // Sort products by popularity (assuming each product has a 'popularity' property)
  const bestSellers = Object.values(productData).flat().sort((a, b) => b.popularity - a.popularity);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Best Sellers</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default BestSellersPage;