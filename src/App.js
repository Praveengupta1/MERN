import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./Component/AppNavbar";
import ShoppingList from "./Component/ShoppingList";
import ItemModal from "./Component/ItemModal";
function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <ItemModal />
      <ShoppingList />
    </Provider>
  );
}

export default App;
