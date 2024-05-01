import React from "react";
import { useAddNewProductMutation } from "../app/service/data";

const AddNewProduct = () => {
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();
  if (error) {
    return <h1>there is an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const handleAddProduct = async () => {
    try {
      const newProductData = {
        id: 101,
        title: "Samsung A7",
        description: "Lorem ipsum",
      };
      await addNewProduct(newProductData);
    } catch (err) {
      console.err("error", err);
    }
  };
  return (
    <div onClick={handleAddProduct} disabled={isLoading}>
      <button>Add new product</button>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
    </div>
  );
};

export default AddNewProduct;
