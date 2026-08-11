import type { Product } from "./api/api";
import ProductCard from "./ProductCard";

interface ProductsPageProps {
  data: Array<Product>;
}

function ProductsPage({ data }: ProductsPageProps) {
  if (!data) return null;

  const cards = data.map((p, i) => (
    <ProductCard
      key={`${p.title}-${i}`}
      title={p.title}
      price={p.price}
      availability={p.availabilityStatus}
      image={p.images[0] ?? ""}
    />
  ));

  return (
    <div className="grid place-items-start justify-start grid-cols-[repeat(auto-fit,300px)] gap-5 p-10 min-h-[calc(100vh-4rem)] w-full">
      {cards}
    </div>
  );
}

export default ProductsPage;
