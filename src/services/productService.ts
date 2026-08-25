import type { Product } from "../types/product";


const API_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
    const response = await fetch(API_URL)

    if (!response.ok) {
        throw new Error("Failed to fetch products")
    }

    const data = await response.json();

    const result: Product[] = data.map((product: any) => {
        return {
            id: product.id,
            name: product.title,
            price: product.price,
            category: product.category,
            image_url: product.image,
        }
    });


    return result;
}