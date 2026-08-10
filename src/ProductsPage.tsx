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
    <div className="flex items-center justify-center flex-wrap gap-5">
      {cards}
    </div>
  );
}

export default ProductsPage;
