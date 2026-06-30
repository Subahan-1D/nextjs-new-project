'use client";'

import ProductCard from "@/src/components/productCard";


const Products = async () => {


  const res = await fetch("http://localhost:5000/products", {

    next: {
      revalidate: 5, // Revalidate the data every 5 seconds
    }
  });
  const products = await res.json();

  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Our Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;