export interface Product {
    name: string;
    price: number;
    image_url: string;
    id: number;
}

export interface CartItem {
    product: Product;
    quantity: number;
  }