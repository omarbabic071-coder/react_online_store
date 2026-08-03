import Header from "./Header.tsx"
import ProductCard from "./ProductCard.tsx";
import SideBar from "./SideBar.tsx";
import ProductsPage from "./ProductsPage.tsx";
import CheckoutPage from "./CheckoutPage.tsx";
import { Activity } from "react";


function App() {
  return <>
  <Header/>
  <SideBar/>
  <Activity mode="visible">
    <ProductsPage />
  </Activity>
  <Activity mode="hidden">
    <CheckoutPage/>
  </Activity>

  </>;
}

export default App;
