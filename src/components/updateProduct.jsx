import React from "react";
import { useUpdateProductMutation } from "../app/service/data";

const UpdateProduct = ({ productId }) => {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();
  if (error) {
    return <h1>there is an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const handleUpdateProduct = async () => {
    try {
      const updateProductData = {
        title: "Updated Product",
      };
      await updateProduct({
        id: productId,
        updatedProduct: updateProductData,
      });
    } catch (err) {
      console.err("error", err);
    }
  };
  return (
    <div>
      <button onClick={handleUpdateProduct}>Update Product</button>
      <h1>{data?.title}</h1>
    </div>
  );
};

export default UpdateProduct;
