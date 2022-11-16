import React, { FC, ReactElement } from 'react';
import { Grid, Box, Alert, LinearProgress } from '@mui/material';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Task } from '../task/task';
import { useQuery, useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';
import { Status } from '../createTaskForm/enums/status';
import { IUpdateTask } from '../createTaskForm/interfaces/IUpdateTask';


export const Taskarea: FC = (): ReactElement => {

  const { error, isLoading, data, refetch } = useQuery(
    ['tasks'],
    async () => {
      return await sendApiRequest<ITaskApi[]>(
        'http://localhost:3001/tasks',
        'GET',
      );
    },
  );

  // Update task mutation
  const updateTaskMutation = useMutation(
    (data: IUpdateTask) => sendApiRequest(
      'http://localhost:3001/tasks',
      'PUT',
      data
    )
  )

  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status of Your Tasks as of{' '}
          {format(new Date(), 'PPPP')}  
        </h2>
      </Box>
      <Grid 
        container
        display='flex'
        justifyContent='center'
        >
          {/* counters */}
          <Grid 
            item
            display='flex'
            flexDirection='row'
            justifyContent='space-around'
            alignItems='center'
            md={10}
            xs={12}
            mb={8}
          >
            <TaskCounter />
            <TaskCounter />
            <TaskCounter />
          </Grid>
          {/* tasks */}
          <Grid 
            item
            display='flex'
            flexDirection='column'
            xs={10}
            md={8}
          >
            <>
            {error && (
            <Alert severity='error'>
              There was an error fetching your tasks
            </Alert>
            )}
            {!error && Array.isArray(data) && data.length === 0 && (    
            <Alert severity='warning'>
              You do not have any tasks create yet. Start by creating a task.
            </Alert>
            )}
            {isLoading ? (
            <LinearProgress />
            ) : (
              Array.isArray(data) &&
              data.length > 0 &&
              data.map((each, index) => {
                return each.status === Status.todo || 
                  each.status === Status.inProgress 
                  ? (
                    <Task 
                      key={index + each.priority}
                      id={each.id}
                      title={each.title}
                      date={new Date(each.date)}
                      description={each.description}
                      priority={each.priority}
                      status={each.status}
                    />
                ): (
                  false
                );
              })
            )}
            </>
          </Grid>
      </Grid>
    </Grid>
  )
}

