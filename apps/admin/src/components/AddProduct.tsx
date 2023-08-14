import React from 'react'
import { Button, Grid } from '@mui/material'
import {useNavigate} from "react-router-dom"
function AddProduct() {
    const navigate = useNavigate();
  return (
    <Grid container mt={5}>
        <Grid item xs={12} sx={{display: 'flex', justifyContent:'flex-end'}}>
            <Button onClick={()=> navigate("/add-product")} variant='contained' color='success'>Add Product</Button>
        </Grid>
    </Grid>
  )
}

export default AddProduct