import { Stack } from '@mui/material'

import { categories } from '../utils/constant'

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    <Stack
        direction={{xs: 'row', md: 'column'}}
        sx={{height:{sx: 'auto', md:'95%'}, overflow: 'auto'}}
    >
        {categories.map(category => (
            <button 
                className='category-btn'
                onClick={() => setSelectedCategory(category.name)}
                style={{background: category.name === selectedCategory && '#FC1503', color: 'white'}} 
                key= {category.name}
            >
                <span style={{color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'}}>{category.icon}</span>
                <span style={{opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
            </button>
        ))} 
    </Stack>
  )

export default Sidebar