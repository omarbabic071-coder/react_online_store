import type { Dispatch, SetStateAction } from "react";
import { type Product } from "../api/api";

interface ProductDetailsProps {
  data: Product;
  setIsDetails: Dispatch<SetStateAction<boolean>>;
  setIsProducts: Dispatch<SetStateAction<boolean>>;
  setSelectedProductIndex: Dispatch<SetStateAction<number | null>>;
}

function ProductDetails({
  data,
  setIsDetails,
  setIsProducts,
  setSelectedProductIndex,
}: ProductDetailsProps) {
  const toggleProductDetails = () => {
    setIsDetails((prev) => !prev);
    setIsProducts((prev) => !prev);
    setSelectedProductIndex(null);
  };
  return (
    <div className=" w-full">
      <div className="grid place-items-center justify-center grid-rows-1 grid-cols-2 m-3">
        <div>
          <button
            className="rounded-xl bg-white p-1 border hover:bg-gray-300 active:bg-gray-500 transition"
            onClick={toggleProductDetails}
          >
            Back
          </button>
          <img
            className="col-span-1 w-full object-cover rounded-xl"
            src={data.images[0] ?? ""}
            alt=""
          />
        </div>

        <div>
          <p className="font-sans text-7xl font-bold justify">{data.brand}</p>
          <p className=" text-5xl justify">{data.title}</p>

          <div className="flex flex-start gap-4 items-center">
            <p className="text-3xl text-gray-500 my-3">{data.category}</p>
            {data.tags.map((tag) => (
              <a key={tag}>{tag}</a>
            ))}
          </div>
          <p className="text-2xl font-bold my-3">{data.rating}⭐</p>

          <p className="text-xl font-bold">
            {(
              data.price -
              data.price * (data.discountPercentage / 100)
            ).toFixed(2)}
            $
          </p>

          <p>Discount: {data.discountPercentage}%</p>

          <p>
            Typical price: <span className="line-through">{data.price}$</span>
          </p>

          <p>{data.availabilityStatus}</p>

          <p className="rounded-xl border-none p-2 my-3 border-black bg-black/20">
            {data.description}
          </p>
          {/* <p>{data.reviews}</p> */}
          <div className="rounded-xl border-none p-2 my-3 border-black bg-black/20 text-justify">
            <p>{data.shippingInformation}</p>
            <p>{data.returnPolicy}</p>
            <p>{data.warrantyInformation}</p>
          </div>
          <button className="font-bold text-white text-xl p-3 w-full rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition my-3">
            BUY
          </button>
          <button className="font-bold text-white text-xl p-3 w-full rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition my-3">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
