import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar'

const Feed = () => (
    <Stack
      sx={{flexDirection: {sx: 'column', md: 'row'}}}
    >
      <Box 
        sx={{height: {xs: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2}}}>
        <Sidebar />
        <Typography className='copyright'
          variant='body2'
          sx = {{mt: 1.5, color: '#fff'}}>
          Copyright 2022 devjef Media
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontweight='bold' mb={2} sx={{color: 'white'}}>
          New <span style={{color: '#F31503'}}>videos</span>
        </Typography>
      </Box>
    </Stack>
  )

export default Feed