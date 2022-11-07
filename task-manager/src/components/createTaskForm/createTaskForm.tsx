import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';

export const CreateTaskForm: FC = (): ReactElement => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            width='100%'
            px={4}
            my={6}
        >
            <Typography mb={2} component='h2' variant='h6'>
                Create A Task
            </Typography>
            {/* Title of task */}
            {/* Task Description */}
            {/* Date */}
            {/* Task Status & Priority */}
           
        </Box>
    )
}


