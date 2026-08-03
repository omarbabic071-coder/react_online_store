import ProductCard from "./ProductCard";

function ProductsPage(){
    const cards = [];
    for (let i = 0; i < 20; i++) {
        cards.push(<ProductCard key={i} />);
    }

    return(
        <div className="w-dvw h-dvh pt-20 pl-80 flex flex-wrap gap-4 justify-center items-center">
            {cards}
        </div>
    )

}

export default ProductsPage