import React from "react";
import { useGetAllProductsQuery } from "../app/service/data";

const AllProducts = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  if (error) {
    return <h1>there is an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(data);
  return (
    <div>
      {data?.products.map((i) => (
        <h1 key={i.id}>{i?.title}</h1>
      ))}
    </div>
  );
};

export default AllProducts;
