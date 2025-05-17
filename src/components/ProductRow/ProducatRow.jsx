import { useState } from "react";

export default function ProductRow({ defaultProduct }) {
  const [product, setProduct] = useState(defaultProduct);

  const handleChange = (field, value) => {
    setProduct({ ...product, [field]: value });
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-11 gap-2 items-center bg-white rounded-lg p-3 shadow transition-all hover:shadow-lg text-sm">
      <span>📦</span>

      <input
        className="border p-1 rounded-md input-style"
        value={product.name}
        onChange={(e) => handleChange("name", e.target.value)}
        placeholder="Product Name"
      />

      <input
        className="input-style hidden md:block"
        value={product.length}
        onChange={(e) => handleChange("length", e.target.value)}
        placeholder="Length"
      />
      <input
        className="input-style hidden md:block"
        value={product.width}
        onChange={(e) => handleChange("width", e.target.value)}
        placeholder="Width"
      />
      <input
        className="input-style hidden md:block"
        value={product.height}
        onChange={(e) => handleChange("height", e.target.value)}
        placeholder="Height"
      />
      <input
        className="input-style hidden md:block"
        value={product.weight}
        onChange={(e) => handleChange("weight", e.target.value)}
        placeholder="Weight"
      />
      <input
        className="input-style hidden md:block"
        value={product.quantity}
        onChange={(e) => handleChange("quantity", e.target.value)}
        placeholder="Quantity"
      />
      <input
        type="color"
        value={product.color}
        onChange={(e) => handleChange("color", e.target.value)}
        className="w-6 h-6 p-0 border-none cursor-pointer rounded-full hidden md:block"
      />

      <button className="text-red-500 hover:text-red-700">🗑️</button>
    </div>
  );
}
