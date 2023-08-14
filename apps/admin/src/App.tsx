import * as React from "react";
import "./App.css";
import {Box} from "@mui/material"
import {Appbar} from "ui"
import { Products } from "./components/Products";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { AddNewProduct } from "./components/AddNewProduct";
function App() {
  return (
    <Box>
      <Appbar isAdmin={true}/>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<AddNewProduct />} />
        </Routes>
      </BrowserRouter>
    </Box>
   
  );
}

export default App;
