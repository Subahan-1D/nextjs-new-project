'use client';
import Image from "next/image";
import { Product } from "../type";



const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <Image
        src={product.image}
        alt={product.product_name}
        width={200}
        height={200}
        className="w-full h-36 object-cover"
      />

      <div className="p-2">
        <h2 className="text-xl font-bold">{product.product_name}</h2>

        <p className="text-gray-500 mt-2">
          Brand: {product.brand}
        </p>

        <p className="text-gray-500">
          Category: {product.category}
        </p>

        <p className="text-2xl font-bold text-green-600 mt-3">
          ${product.price}
        </p>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;