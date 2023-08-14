import React from 'react'
import { Toolbar, Typography, Box, Button } from '@mui/material'

const pages = ['All Products', 'All Orders', 'All Users'];
export function AdminToolBar() {
  return (
    <Toolbar>
    <Typography
    variant="h6"
    noWrap
    component="div"
    sx={{ display: { xs: 'none', sm: 'block' } }}
  >
    Admin
  </Typography>
  <Box sx={{ ml: 5,flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ textTransform:'none', my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
  </Toolbar>
  )
}
