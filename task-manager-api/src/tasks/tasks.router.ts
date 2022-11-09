import  { Router, Request, Response } from 'express';
import { taskController } from './tasks.controller';
import { createValidator } from './tasks.validator';

// Fire the router function to create a new router
export const tasksRouter: Router = Router();

// Create a default route
tasksRouter.get('/tasks', taskController.getAll);

// Create a post route
tasksRouter.post('/tasks', createValidator, taskController.create);