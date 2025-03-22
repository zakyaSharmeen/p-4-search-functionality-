import React, { useState } from "react";
import productsData from "./data.json";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  // Extractg JSON
  const products = productsData.products;
  //   console.log(products);

  // Filter prdcts  query
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center  justify-center bg-green-300 min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Product Search</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border p-2 w-80 rounded-md shadow-md mb-4 "
      />

      {/* Product List */}
      <ul className="bg-white shadow-md  p-4 w-80">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <li key={index} className="p-2 border-b last:border-none">
              {product}
            </li>
          ))
        ) : (
          <p className="text-red-500 text-center">No products found.</p>
        )}
      </ul>
    </div>
  );
}

export default Search;
