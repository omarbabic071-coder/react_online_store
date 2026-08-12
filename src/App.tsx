import Header from "./Header.tsx";
import SideBar from "./SideBar.tsx";
import ProductsPage from "./ProductsPage.tsx";
import CheckoutPage from "./CheckoutPage.tsx";

import { Activity, useEffect, useState } from "react";
import fetchProductsData, { type Product } from "./api/api.ts";

function App() {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProductsData();
      setProductsData(data);
    };

    void loadProducts();
  }, []);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredProducts = normalizedQuery
    ? productsData.filter((product) =>
        product.title.toLowerCase().includes(normalizedQuery),
      )
    : productsData;

  return (
    <>
      <Header
        searchQuery={searchQuery}
        onSearchQueryChange={setSearchQuery}
        filteredCount={filteredProducts.length}
        totalCount={productsData.length}
      />
      <div className="pt-16 flex">
        <SideBar />
        <main className="flex-1 min-h-[calc(100vh-4rem)]">
          <Activity mode="visible">
            <ProductsPage data={filteredProducts} />
          </Activity>
          <Activity mode="hidden">
            <CheckoutPage />
          </Activity>
        </main>
      </div>
    </>
  );
}

export default App;
