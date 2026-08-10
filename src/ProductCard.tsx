interface ProductCardProps {
  title: string;
  price: number;
  availability: string;
  image: string;
}

function ProductCard({ title, price, availability, image }: ProductCardProps) {
  return (
    <div className="p-3 rounded-2xl flex flex-col justify-evenly items-center gap-1 bg-gray-300 w-64 h-80">
      <img
        src={image}
        alt="https://www.placehold.co/200"
        className="w-full h-40 object-cover rounded-xl"
      />
      <p className="font-bold text-xl font-sans text-center">{title}</p>
      <div className="flex justify-evenly items-center w-full">
        <p className="text-gray-700">{price}$</p>
        <p className="text-gray-700">{availability}</p>
      </div>
    </div>
  );
}
export default ProductCard;
