export interface Product {
    name: string;
    price: number;
    image_url: string;
    id: number;
}

export interface CartProps {
    product: Product;
    quantity: number;
  }