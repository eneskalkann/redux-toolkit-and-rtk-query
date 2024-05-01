import React from "react";
import { useGetProductByIDQuery } from "../app/service/data";

const SpecificProduct = () => {
  const { data, error, isLoading } = useGetProductByIDQuery(2);
  if (error) {
    return <h1>there is an error</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <div>{data?.title}</div>;
};

export default SpecificProduct;
