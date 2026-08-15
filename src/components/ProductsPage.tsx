import type { Product } from "../api/api";
import ProductCard from "./ProductCard";
import type { Dispatch, SetStateAction } from "react";

interface ProductsPageProps {
  data: Product[];
  setIsDetails: Dispatch<SetStateAction<boolean>>;
  setIsProducts: Dispatch<SetStateAction<boolean>>;
  setSelectedProductIndex: Dispatch<SetStateAction<number | null>>;
}

function ProductsPage({
  data,
  setIsDetails,
  setIsProducts,
  setSelectedProductIndex,
}: ProductsPageProps) {
  if (!data) return null;

  const cards = data.map((product) =>
    (() => {
      const { title, price, availabilityStatus, images, id } = product;
      return (
        <ProductCard
          key={`${title}-${id}`}
          title={title}
          price={price}
          availability={availabilityStatus}
          image={images[0] ?? ""}
          setIsDetails={setIsDetails}
          setIsProducts={setIsProducts}
          setSelectedProductIndex={setSelectedProductIndex}
          id={id}
        />
      );
    })(),
  );

  return (
    <div className="grid place-items-start justify-start grid-cols-[repeat(auto-fit,300px)] gap-5 p-10 min-h-[calc(100vh-4rem)] w-full ">
      {cards}
    </div>
  );
}

export default ProductsPage;
