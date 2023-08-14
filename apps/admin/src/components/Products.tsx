import { Box, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from "@mui/material"
import * as React from "react";
import AddProduct from "./AddProduct";

function createData(
    name: string,
    category: string,
    description: string,
    imageLink: string,
    id: number
){
    return {name, category, description, imageLink,id};
}
  
const rows = [
    createData("Iphone14","smartphone","The ultimate iPhone", "iphone14.jpeg",1),
    createData("SamsungS22", "Smartphone","Powerful in purple","galaxy-s22.webp",2 ),
    createData("SamsungS22", "Smartphone","Powerful in purple","galaxy-s22.webp" ,3),
    createData("SamsungS22", "Smartphone","Powerful in purple","galaxy-s22.webp" ,4),
    createData("SamsungS22", "Smartphone","Powerful in purple","galaxy-s22.webp" ,5),
    createData("SamsungS22", "Smartphone","Powerful in purple","galaxy-s22.webp" ,6)
]

export function Products() {
  return (
    <Box>
         <AddProduct />
    <TableContainer sx={{mt:10}}component={Paper}>
        <Table sx={{minWidth: 650}}>
            <TableHead>
                <TableRow>
                    <TableCell>No</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">ImageLink</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right"><img style={{height:50}}src={row.imageLink}></img></TableCell>

            </TableRow>
          ))} 
            </TableBody>
        </Table>
    </TableContainer>
    </Box>
   
  )
}
