import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constant'

const VideoCard = ({video:{id:{videoId}, snippet}}) => {
    return (
        <Card>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{width: '100%', height: {xs:'180px', sm: '190px', md: '180px'}}}
                />
            </Link>
            <CardContent sx={{backgroundColor: '#1e1e1e', height: '100px'}}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color="#ffffff">
                        {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight="bold" color="gray">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{fontSize: 12, color: 'gray', ml: '5px'}} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard