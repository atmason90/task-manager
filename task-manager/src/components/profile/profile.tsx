import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';


export const Profile: FC = (): ReactElement => {
    {
        // Name
    }
    {
        // Welcome Message
    }
    return (
        // container for profile
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            {/* Avatar from mui */}
            <Avatar
                sx={{
                    width: '96px',
                    height: '96px',
                    backgroundColor: 'primary.main',
                    marginBottom: '16px',
                }}
            >
                <Typography variant='h4' color='text.primary'>J</Typography>
            </Avatar>
            {/* Name using typography from mui */}
            <Typography variant='h6' color='text.primary'>Welcome, John</Typography>
            {/* Welcome Message using typography from mui */}
            <Typography variant='body1' color='text.primary'>This is your personal task manager</Typography>
        </Box>
    )
}

