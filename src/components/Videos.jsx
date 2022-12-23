import { Stack, Box } from '@mui/material'
import {VideoCard, ChannelCard} from './'

const Videos = ({videos}) => {
  if (!videos?.length) return 'Loading...'  

  return (
    <Stack sx={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2, margin: '0 auto'}}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail ={item} />}
        </Box>
      ))}
    </Stack>
  )
}


export default Videos