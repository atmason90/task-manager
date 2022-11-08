import React, { FC, ReactElement } from 'react'
import { Box } from '@mui/material';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../createTaskForm/enums/status';
import { Priority } from '../createTaskForm/enums/priority';

export const Task: FC<ITask> = (props): ReactElement => {
    // Destructure props
    const { 
        title = 'Test Title', 
        date = new Date(), 
        description = 'Lorem ipsum dolor sit amet', 
        priority = Priority.normal,
        status = Status.completed,
        onStatusChange = (e) => console.log(e),
        onClick = (e) => console.log(e),    
    } = props;

    return (
        <Box
            display='flex'
            width='100%'
            justifyContent='flex-start'
            flexDirection='column'
            mb={4}
            p={2}
            sx={{
                width: '100%',
                backgroundColor: 'background.paper',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'error.light',
            }}
        >
            {/* task header */}
            <TaskHeader title={title} date={date} />
            {/* task description */}
            <TaskDescription description={description} />
            {/* task footer */}
            <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />

        </Box>
    )
}


