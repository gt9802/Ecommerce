import React from 'react'
import {Box, AppBar, Toolbar, Typography} from '@mui/material'
import { AdminToolBar } from './AdminToolBar';
import { UserToolBar } from './UserToolBar';
interface Prop{
  isAdmin: boolean;
}
export const Appbar:React.FC<Prop> =({isAdmin}) =>{
  return (
    <Box>
        {isAdmin? <AppBar position='static'>
          <AdminToolBar/>
        </AppBar> 
        :
        <AppBar position='static'>
          <UserToolBar />
        </AppBar>
    }
        
    </Box>
  )
}

