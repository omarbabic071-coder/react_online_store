interface ProductCardProps{
    title:string,
    price:number,
    availability:string,
    image:string,
}

function ProductCard({title, price, availability, image}:ProductCardProps){
    return(
        <div className=" p-3 rounded-2xl flex flex-col items-center gap-1 bg-gray-300 max-w-50 max-h-80">
            <img src={image} alt="https://www.placehold.co/200" />
            <p>{title}</p>
            <p>{price}</p>
            <p>{availability}</p>
            
        </div>
    )
}
export default ProductCard