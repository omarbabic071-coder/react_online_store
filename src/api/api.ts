import axios from "axios";

export interface Product{
    title:string,
    price:number,
    availabilityStatus: string,
    images:string[]

}

export interface ProductsResponse{
    products: Product[],
}

export default async function fetchProductsData():Promise<ProductsResponse>{
    const response=await axios.get<ProductsResponse>("https://dummyjson.com/products")
    console.log(response.data)
    return response.data
} 