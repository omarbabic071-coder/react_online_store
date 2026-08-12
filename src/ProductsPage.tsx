import type { Product } from "./api/api";
import ProductCard from "./ProductCard";

interface ProductsPageProps {
  data: Array<Product>;
}

function ProductsPage({ data }: ProductsPageProps) {
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
