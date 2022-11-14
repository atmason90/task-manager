import React, { FC, ReactElement, useState } from 'react';
import { Box, Typography, Stack, LinearProgress, Button, Alert, AlertTitle } from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/status';
import { Priority } from './enums/priority';
import { useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../taskarea/interfaces/ICreateTasks';

export const CreateTaskForm: FC = (): ReactElement => {
    // Declare states
    const [title, setTitle] = useState<string | undefined>(undefined);
    const [description, setDescription] = useState<string | undefined>(undefined);
    const [date, setDate] = useState<Date | null>(new Date());
    const [status, setStatus] = useState<string>(Status.todo);
    const [priority, setPriority] = useState<string>(Priority.normal);

    // Create task mutation
    const createTaskMutation = useMutation((data: ICreateTask) =>
        sendApiRequest(
            'http://localhost:3000/tasks',
            'POST',
            data
        )
    );

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            width='100%'
            px={4}
            my={6}
        >
            <Alert
                severity='success'
                sx={{width: '100%', marginBottom: '16px'}}
            >
                <AlertTitle>Success</AlertTitle>
                The task has been created successfully
            </Alert>
            <Typography mb={2} component='h2' variant='h6'>
                Create A Task
            </Typography>
            <Stack sx={{ width: '100%'}} spacing={2}>
                {/* Title of task */}
                <TaskTitleField 
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* Task Description */}
                <TaskDescriptionField 
                    onChange={(e) => setDescription(e.target.value)}
                />
                {/* Date */}
                <TaskDateField 
                    value={date}
                    onChange={(date) => setDate(date)}
                />
                <Stack direction='row' spacing={2}>
                    {/* Task Status & Priority */}
                    <TaskSelectField 
                        label='Status' 
                        name='status'
                        value={status}
                        onChange={(e) => setStatus(e.target.value as string)}
                        items={[
                            {
                                value: Status.todo,
                                label: Status.todo,
                            },
                            {
                                value: Status.inProgress,
                                label: Status.inProgress,
                            },
                    ]} />
                    <TaskSelectField 
                        label='Priority' 
                        name='priority' 
                        value={priority}
                        onChange={(e) => setPriority(e.target.value as string)}
                        items={[
                            {
                                value: Priority.low,
                                label: Priority.low,
                            },
                            {
                                value: Priority.normal,
                                label: Priority.normal,
                            },
                            {
                                value: Priority.high,
                                label: Priority.high,
                            },
                    ]} />
                </Stack>
                <LinearProgress />
                <Button
                    variant='contained'
                    size='large'
                    fullWidth
                >Create a Task</Button>
            </Stack>
        </Box>
    )
}


