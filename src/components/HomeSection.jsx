import React from 'react';

function HomeSection({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="border-b border-gray-200 mb-4"></div> {/* Decorative line */}
      {children}
    </div>
  );
}

export default HomeSection;