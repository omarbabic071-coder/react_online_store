import axios from "axios";

export interface Product {
  title: string;
  price: number;
  availabilityStatus: string;
  images: string[];
  id: number;
  brand: string;
  category: string;
  discountPercentage: number;
  description: string;
  stock: number;
  tags: Array<string>;
  warrantyInformation: string;
  shippingInformation: string;
  reviews: Array<Review>;
  sku: string;
  returnPolicy: string;
}

export interface ProductsResponse {
  products: Product[];
  limit: number;
}

export interface Review {
  comment: string;
  date: string;
  rating: number;
  reviewerEmail: string;
  reviewerName: string;
}

export default async function fetchProductsData(): Promise<Product[]> {
  try {
    const response = await axios.get<ProductsResponse>(
      "https://dummyjson.com/products",
    );

    if (!response?.data) {
      throw new Error("Could not fetch data.");
    }

    console.log(response.data);
    return response.data.products;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
