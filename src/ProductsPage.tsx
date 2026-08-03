import ProductCard from "./ProductCard";
import type { Product, ProductsResponse } from "./api/api";

interface ProductsPageProps {
  data: ProductsResponse | null;
}

function ProductsPage({ data }: ProductsPageProps) {
  if (!data) return null;

  const cards = data.products.map((product, index) => (
    <ProductCard
      key={`${product.title}-${index}`}
      title={product.title}
      price={product.price}
      availability={product.availabilityStatus}
      image={product.images[0] ?? ""}
    />
  ));

  return <div className="flex items-center justify-center flex-wrap gap-5">{cards}</div>;
}

export default ProductsPage