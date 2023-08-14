
import { Toolbar, Typography, Box,Button } from '@mui/material'

const pages = ['Products', 'Cart', 'Orders'];
export const UserToolBar = () => {
  return (
    <Toolbar>
        <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        Shopping Cart
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