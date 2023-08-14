import express from "express";
import { authenticateJwt } from "../../middleware";
import { User, Product } from "../../db";
import { ProductData, ProductResponse } from "../../interface/product/interface";
const router = express.Router();

router.get('/products', authenticateJwt, async (req: express.Request, res: express.Response<ProductResponse[] | {message: string}>) => {
    try{
        const products:ProductResponse[]  = await Product.find();
        if(products){
            return res.json(products);
        }else{
            return res.status(404).json({message: "No product found"})
        }
        
    }catch(error){
        res.sendStatus(500)
    }
 });

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


router.post('/product/:productId', authenticateJwt, async (req, res) => {
    try{
        const product: ProductResponse | null = await Product.findById(req.params.productId);
        if (product) {
            try{
                const user = await User.findOne({_id:req.headers["userId"]});
                if (user) {
                    user.purchasedProducts.push(product);
                    await user.save()
                    res.json({ message: 'Product purchased successfully' });
                  } else {
                    res.status(403).json({ message: 'User not found' });
                  }
                } catch(error) {
                  res.status(404).json({ message: 'Product not found' });
                }
            }
            
    }catch(error){
        return res.sendStatus(500);
    }
 });

 router.get('/purchasedProducts', authenticateJwt, async (req: express.Request, res: express.Response<ProductResponse[] | {message: string}>) => {
    try{
        const user = await User.findOne({ _id: req.headers['userId'] }).populate('purchasedProducts');
    if (user) {
      res.json(user.purchasedProducts || []);
    } else {
      res.status(403).json({ message: 'User not found' });
    }
    }catch(error){
        res.sendStatus(500);
    }
    
 });
  




export default router;