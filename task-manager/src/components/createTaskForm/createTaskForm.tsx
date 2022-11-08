import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { TaskTitleField } from './_taskTitleField';
import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskDateField } from './_taskDateField';
import { TaskSelectField } from './_taskSelectField';
import { Status } from './enums/status';
import { Priority } from './enums/priority';

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
            <Stack sx={{ width: '100%'}} spacing={2}>
                {/* Title of task */}
                <TaskTitleField />
                {/* Task Description */}
                <TaskDescriptionField />
                {/* Date */}
                <TaskDateField />
                <Stack direction='row' spacing={2}>
                    {/* Task Status & Priority */}
                    <TaskSelectField label='Status' name='status' items={[
                        {
                            value: Status.todo,
                            label: Status.todo,
                        },
                        {
                            value: Status.inProgress,
                            label: Status.inProgress,
                        },
                    ]} />
                    <TaskSelectField label='Priority' name='priority' items={[
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
            </Stack>
        </Box>
    )
}


