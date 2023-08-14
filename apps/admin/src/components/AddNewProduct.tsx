import React from 'react'
import { Card, TextField, Button } from '@mui/material'
export function AddNewProduct() {
  return (
    <Card sx={{width:400, padding:5, margin:"0 auto", marginTop:10}} >
        <TextField  fullWidth id="outlined-basic" label="name" variant="outlined" />
        <TextField sx={{mt:3}} fullWidth id="outlined-basic" label="category" variant="outlined" />
        <TextField sx={{mt:3}} fullWidth id="outlined-basic" label="description" variant="outlined" />
        <TextField sx={{mt:3}} fullWidth id="outlined-basic" label="imageLink" variant="outlined" />

        <Button sx={{mt:3}} variant='contained'>Add Product</Button>
    </Card>
  )
}
