import React from 'react';
import VideoBlock from '../components/VideoBlock';
import ChatBot from '../components/ChatBot';
import { Box } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
            }}
        >
            <Box sx={{ alignSelf: 'flex-start' }}>
                <VideoBlock />
            </Box>
            <ChatBot />
        </Box>
    );
};

export default Home;
