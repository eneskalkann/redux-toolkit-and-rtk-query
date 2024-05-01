import React from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Counter from "./components/counter";
import AllProducts from "./components/allProducts";
import SpecificProduct from "./components/specificProduct";
import AddNewProduct from "./components/addNewProduct";
import UpdateProduct from "./components/updateProduct";
import DeleteProduct from "./components/deleteProduct";
const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <AllProducts /> */}
      {/* <SpecificProduct /> */}
      <AddNewProduct />
      <UpdateProduct productId={3} />
      <DeleteProduct productId={4} />
    </div>
  );
};

export default App;
