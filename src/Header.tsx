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
    <nav className="w-full mt-o ml-0 p-2 fixed flex justify-evenly items-center bg-gray-300">
      <p className="text-2xl font-sans font-bold">React Store</p>
      <div className="flex justify-evenly items-center gap-2">
        <input
          type="text"
          className="bg-white border p-1 rounded-xl "
          onChange={handleProductSearch}
        />
        <button className=" rounded-xl bg-white p-1 border hover:bg-gray-300 active:bg-gray-500 transition">
          Search
        </button>
      </div>
      <p>Products: 3</p>
    </nav>
  );
}

export default Header;
