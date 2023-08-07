
export interface ProductData{
    name:string;
    description: String,
    price: Number,
    imageUrl: String,
    category: String,
    stockQuantity: Number,
}

export interface ProductResponse {
    _id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    stockQuantity: number;
    category: string;
  }

export type PartialProductData = Partial<ProductResponse>;