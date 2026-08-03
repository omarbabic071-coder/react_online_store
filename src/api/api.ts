import axios from "axios";

export default async function fetchProductData(){
    const response=await axios.get("https://www.dummyjson.com/products")
    console.log(response.data)
    return response.data
} 