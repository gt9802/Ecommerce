
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Appbar}  from 'ui'
import {Box} from "@mui/material"
import Products from './components/Products'
function App() {
  
  return (
    <Box>
        <Router>
          <Appbar isAdmin={false}/>
          <Routes>
            <Route path='/products' element={<Products />} />
          </Routes>
        </Router>
    </Box>
   
  )
}

export default App
