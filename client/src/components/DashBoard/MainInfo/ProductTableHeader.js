import React from "react";

function ProductTableHeader() {
  return (
    <tr className="text-left text-small last:border-b-0 border-b-2 border-[#f8f8f8] ">
      <th className="font-medium px-1.5 py-2">Product Name</th>
      <th className="font-medium px-1.5 py-2">Category</th>
      <th className="font-medium px-1.5 py-2">Date</th>
      <th className="font-medium px-1.5 py-2">Price</th>
      <th className="font-medium px-1.5 py-2">Stock</th>
      <th className="font-medium px-1.5 py-2">Sold</th>
      <th className="font-medium px-1.5 py-2">Revenue</th>
    </tr>
  );
}

export default ProductTableHeader;
