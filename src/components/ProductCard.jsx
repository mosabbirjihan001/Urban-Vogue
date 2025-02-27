import React from 'react';

function ProductCard({ product, addToCart, buyNow }) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure><img src={product.image} alt={product.name} /></figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>${product.price}</p>
        <p className="text-sm">{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
          <button className="btn btn-secondary" onClick={() => buyNow(product)}>Buy Now</button> {/* Added Buy Now button */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;