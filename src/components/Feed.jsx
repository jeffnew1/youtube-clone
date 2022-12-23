import {useState, useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material'
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack
      direction={{xs: 'column', md: 'row'}}
      sx={{
        width: 'min(97%, 1200px)',
        margin: '0 auto'
      }}
    >
      <Box 
        sx={{height: {md: '92vh'}, borderRight: '1px solid #3d3d3d', pr: 2}}>
        <Sidebar 
          selectedCategory = {selectedCategory}
          setSelectedCategory = {setSelectedCategory }
        />
        <Typography className='copyright'
          variant='body2'
          sx = {{mt: 1.5, color: '#fff'}}>
          Copyright 2022 devjef Media
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#F31503'}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed