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
    <div>
      <button onClick={toggleProductDetails}>Back</button>
      <div className="grid place-items-center justify-center grid-rows-1 grid-cols-2">
        <img
          className="col-span-1 w-full object-contain rounded-xl"
          src={data.images[0] ?? ""}
          alt=""
        />
        <div>
          <p className="font-sans text-9xl font-bold">{data.brand}</p>
          <p className=" text-7xl">{data.title}</p>
          <p className="text-gray-500">{data.category}</p>
          <p>{data.tags}</p>
          <p>{data.rating}</p>
          <p>{data.discountPercentage}</p>
          <p>
            {(
              data.price -
              data.price * (data.discountPercentage / 100)
            ).toFixed(2)}
            $
          </p>
          <p>
            Typical price: <span className="line-through">{data.price}$</span>
          </p>
          <p>{data.availabilityStatus}</p>
          <p>{data.description}</p>
          <p>
            <data value="" className="reviews"></data>
          </p>
          <p>{data.shippingInformation}</p>
          <p>{data.returnPolicy}</p>
          <p>{data.warrantyInformation}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
