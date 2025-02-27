import React from 'react';
import ProductCard from '../components/ProductCard';
import productData from '../data/productData'; // Adjust path if needed

function NewArrivalsPage() {
  // Sort products by date added (assuming each product has an 'dateAdded' property)
  const newArrivals = Object.values(productData).flat().sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">New Arrivals</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivalsPage;