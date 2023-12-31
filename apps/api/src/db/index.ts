import { type } from "os";
import mongoose from "mongoose";
import { AdminDetail } from "../interface/user/interface";
import { ProductData } from "../interface/product/interface";
import { UserDetail } from "../interface/user/interface";
const adminSchema = new mongoose.Schema<AdminDetail>({
    username: String,
    password: String
})

const userSchema = new mongoose.Schema<UserDetail>({
    username: String,
    password: String,
    purchasedProducts:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
})

const productSchema = new mongoose.Schema<ProductData>({
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    category: String,
    stockQuantity: Number,

})

export const Admin = mongoose.model('Admin', adminSchema);
export const Product = mongoose.model('Product', productSchema);
export const User = mongoose.model('User', userSchema);