import {Stack} from '@mui/material'
import {Link} from 'react-router-dom'

import {logo} from '../utils/constant'
import SearchBar from './SearchBar'

const Navbar = () => (
  <Stack 
    direction="row"
    sx={{
      background: '#000', 
      position: 'sticky', 
      zIndex: 5,
      top: 0, 
      py: 3,
      justifyContent: 'space-between',
      alignItems: "center", 
      px: '3vw',
      margin: '0 auto',
    }}
  >
    <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
      <img src={logo} alt='logo' height={45} />
    </Link>
    <SearchBar />
  </Stack>
)


export default Navbar