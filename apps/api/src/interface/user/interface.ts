import { ProductResponse } from "../product/interface"

export interface AdminDetail{
    username: String,
    password: String
}
export interface UserDetail{
    username: String,
    password: String,
    purchasedProducts: ProductResponse[]
}