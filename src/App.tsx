import Header from "./components/Header.tsx";
import SideBar from "./components/SideBar.tsx";
import ProductsPage from "./components/ProductsPage.tsx";
// import CheckoutPage from "./components/CheckoutPage.tsx";
import ProductDetails from "./components/ProductDetails.tsx";

import { Activity, useEffect, useState } from "react";
import fetchProductsData, { type Product } from "./api/api.ts";

function App() {
  const [productsData, setProductsData] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductIndex, setSelectedProductIndex] = useState<
    number | null
  >(null);
  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProductsData();
      setProductsData(data);
    };

    void loadProducts();
  }, []);

  const [isDetails, setIsDetails] = useState(false);
  const [isProducts, setIsProducts] = useState(true);
  // const [isCheckout, setIsCheckout] = useState(false);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredProducts = normalizedQuery
    ? productsData.filter((product) =>
        product.title.toLowerCase().includes(normalizedQuery),
      )
    : productsData;

  return (
    <>
      <Header searchQuery={searchQuery} onSearchQueryChange={setSearchQuery} />
      <div className="pt-16 flex">
        <SideBar />
        <main className="flex-1 min-h-[calc(100vh-4rem)]">
          <Activity mode={isProducts ? "visible" : "hidden"}>
            <ProductsPage
              data={filteredProducts}
              setIsDetails={setIsDetails}
              setIsProducts={setIsProducts}
              setSelectedProductIndex={setSelectedProductIndex}
            />
          </Activity>
          {/* <Activity mode={isCheckout ? "visible" : "hidden"}>
            <CheckoutPage />
          </Activity> */}
          <Activity mode={isDetails ? "visible" : "hidden"}>
            {selectedProductIndex !== null &&
              productsData[selectedProductIndex] && (
                <ProductDetails
                  data={productsData[selectedProductIndex]}
                  setIsDetails={setIsDetails}
                  setIsProducts={setIsProducts}
                  setSelectedProductIndex={setSelectedProductIndex}
                />
              )}
          </Activity>
        </main>
      </div>
    </>
  );
}

export default App;
