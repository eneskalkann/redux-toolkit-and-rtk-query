import React from "react";
import { useDeleteProductMutation } from "../app/service/data";

const DeleteProduct = ({ productId }) => {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();
  if (error) {
    return <h1>there is an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (err) {
      console.err("error", err);
    }
  };
  return (
    <div>
      <h1>{data?.title ? `${data.title} deleted successfully` : ""}</h1>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        delete product
      </button>
    </div>
  );
};

export default DeleteProduct;
