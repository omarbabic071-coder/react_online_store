import { type ChangeEvent, type Dispatch, type SetStateAction } from "react";
import { type Product, type ProductsResponse } from "./api/api";

interface HeaderProps {
  productsList: ProductsResponse | null;
  setFilteredProductsList: Dispatch<SetStateAction<Array<Product>>>;
}

function Header({ productsList, setFilteredProductsList }: HeaderProps) {
  const handleProductSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();

    if (!productsList?.products) return;

    const filtered = productsList.products.filter((product) =>
      product.title.toLowerCase().includes(query),
    );

    setFilteredProductsList(filtered);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 flex h-16 items-center justify-between gap-4 bg-gray-300 px-4">
      <p className="text-2xl font-sans font-bold">React Store</p>
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="bg-white border p-1 rounded-xl"
          onChange={handleProductSearch}
        />
        <button className="rounded-xl bg-white p-1 border hover:bg-gray-300 active:bg-gray-500 transition">
          Search
        </button>
      </div>
      <p>Products: 3</p>
    </nav>
  );
}

export default Header;
