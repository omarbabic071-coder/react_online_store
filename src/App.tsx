import Header from "./Header.tsx";
import SideBar from "./SideBar.tsx";
import ProductsPage from "./ProductsPage.tsx";
import CheckoutPage from "./CheckoutPage.tsx";
import { Activity, useEffect, useState } from "react";
import { type ProductsResponse } from "./api/api.ts";
import fetchProductsData from "./api/api.ts";

function App() {
  const [productsData, setProductsData] = useState<ProductsResponse | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProductsData();
      setProductsData(data);
    };

    void loadProducts();
  }, []);

  return (
    <>
      <Header />
      <SideBar />
      <Activity mode="visible">
        <ProductsPage data={productsData} />
      </Activity>
      <Activity mode="hidden">
        <CheckoutPage />
      </Activity>
    </>
  );
}

export default App;
