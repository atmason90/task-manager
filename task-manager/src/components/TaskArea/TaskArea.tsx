import React, { FC, ReactElement } from 'react';
import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/taskCounter';

export const Taskarea: FC = (): ReactElement => {
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
            <Box>Tasks will go here</Box>
            <Box>Tasks will go here</Box>
          </Grid>
      </Grid>
    </Grid>
  )
}

