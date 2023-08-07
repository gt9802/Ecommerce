import express from "express";
import { authenticateJwt } from "../../middleware";
import { Product } from "../../db";
import { ProductData, ProductResponse, PartialProductData} from "../../interface/product/interface";
import { startSession } from "mongoose";
const router = express.Router();

interface Params{
    productId: string;
}

router.post('/products', authenticateJwt, async (req: express.Request<{},{},ProductData>, res: express.Response<{message: string, productId?: string}>) => {
    const productData: ProductData = req.body;

    const product = new Product({
        name: productData.name,
        description: productData.description,
        price: productData.price,
        imageUrl: productData.imageUrl,
        stockQuantity: productData.stockQuantity,
        category: productData.category,
    })
    await product.save().then((savedProduct)=>{
        const productId = savedProduct._id.toString();
        res.status(201).json({
            message: "Product added successfully",
            productId: productId
        });
    }).catch((err)=>{
        res.status(500).json({
            message: "Failed to  add product"
        })
    })
});

router.get("/products",authenticateJwt, async (req: express.Request,res: express.Response<{products: ProductResponse[]} | {message: string}>)=>{
    try{
        const products:ProductResponse[] = await Product.find();
        res.json({products})
    } catch(error){
        res.status(500).json({message: "no products found"})
    }
})


router.get("/products/:productId", authenticateJwt, async(req: express.Request,res: express.Response<{product:ProductResponse} | {message: string}>)=>{
    const productId = req.params.productId;
    try{
        const product: ProductResponse | null = await Product.findById(productId);
        if(product === null){
            res.status(404).json({message: "product not found"})
        }else{
            res.json({product: product})
        }
    }catch(error){
        res.status(500).json({message: " product id not found"})
    }
})

router.put("/products/:productId", async (req: express.Request<Params,PartialProductData>,res:express.Response<ProductResponse | {}| {error: string}>)=>{
    const productId = req.params.productId;
    const updatedProductData: PartialProductData = req.body;
    try{
        const product: PartialProductData | null = await Product.findByIdAndUpdate(productId, updatedProductData, {new:true});
        if(!product){
            return res.status(404).json({error: "Product not found"});
        }
        res.status(201).json(product);

    }catch(error){
        res.status(404).json({
            error: "id not found"
        })
    }
})





export default router;