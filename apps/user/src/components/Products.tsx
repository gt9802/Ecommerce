
import { Grid } from "@mui/material"
import {ProductCard} from "./ProductCard"
interface Product{
  "name": string,
    "description":string
    "category": string
    "imageLink": string
}
export default function Products() {

    
    let products: Product[] = [
        {"name": "Iphone14","category": "smartphone","description": "The ultimate iPhone","imageLink": "iphone14.jpeg"},
        {"name": "SamsungS22","category": "smartphone","description": "Powerful in purple","imageLink": "galaxy-s22.webp"},
        {"name": "Nothing2","category": "smartphone","description": "Come to the bright side","imageLink": "nothing.webp"},
        {"name": "Iphone14","category": "smartphone","description": "The ultimate iPhone","imageLink": "iphone14.jpeg"},
        {"name": "SamsungS22","category": "smartphone","description": "Powerful in purple","imageLink": "galaxy-s22.webp"},
        {"name": "Iphone14","category": "smartphone","description": "The ultimate iPhone","imageLink": "iphone14.jpeg"},
        {"name": "Nothing2","category": "smartphone","description": "Come to the bright side","imageLink": "nothing.webp"},
        {"name": "SamsungS22","category": "smartphone","description": "Powerful in purple","imageLink": "galaxy-s22.webp"},
    ]
  return (
    <Grid container direction={"column"} paddingTop={10}>
            <Grid  item xs={12} spacing={4} container sx={{display: "flex"}}>
            {products.map((product)=> <ProductCard product={product} />)} 
            </Grid>
       
    </Grid>
  )
}
