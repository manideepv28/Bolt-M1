export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface User {
  id: string;
  email: string;
}