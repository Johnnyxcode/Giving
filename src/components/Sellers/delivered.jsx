import React from "react";
import { useProductContext } from "../Sellers/ProductContext";
import ProductCard from "../Sellers/ProductCard";
import TrackOrder from "../../pages/Sellers/TrackOrder";

const Delivered = () => {
  const { products } = useProductContext();
  const orderedProducts = products.filter(
    (product) => product.status === "delivered"
  );

  return (
    <>
      <TrackOrder />
      <div>
        {orderedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Delivered;
