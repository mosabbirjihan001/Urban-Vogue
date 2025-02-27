import React from 'react';
import ProductCard from '../components/ProductCard';
import productData from '../data/productData'; // Adjust path if needed

function SalePage() {
  // Filter products that are on sale (assuming each product has an 'isOnSale' property)
  const saleProducts = Object.values(productData).flat().filter(product => product.isOnSale);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Sale</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {saleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default SalePage;