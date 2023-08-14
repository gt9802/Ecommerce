import { 
    Grid,
    Card, 
    CardMedia, 
    Typography, 
    CardContent, 
    CardActions,
    Button 
} from "@mui/material"
import React from "react";
interface Product{
    "name": string;
    "description":string;
    "imageLink": string;
}
interface Prop{
    product: Product;
}
export const ProductCard: React.FC<Prop> = ({product}) =>{

  return (
        <Grid item xs={12} sm={4} lg={3}>
            <Card sx={{maxWidth: 345}}>
        <CardMedia
        sx={{ height: 145 }}
        image={product.imageLink}
        title="green iguana"
        />
        <CardContent>
         <Typography gutterBottom variant="h5" component="div">
            {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {product.description}
        </Typography>
        </CardContent>
        <CardActions>
            <Button variant="contained" size="small">add to cart</Button>
        </CardActions>
        </Card>
        </Grid>
        
    
  )
}
