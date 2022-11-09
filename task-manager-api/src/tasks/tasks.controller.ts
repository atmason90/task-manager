import { Task } from "./tasks.entity";
import { AppDataSource } from "../../index";
import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

class TasksController {
    // Method for the get route
    public async getAll(req: Request, res: Response): Promise<Response> {
        // Declare a variable to hold all tasks
        let allTasks: Task[];
        
        // Fetch all tasks using the repository
        try {
            allTasks = await AppDataSource.getRepository(
                Task,
            )
            .find({
                order: {
                    date: 'ASC',
                },
            });
            // Convert the tasks instance to an array of objects
            allTasks = instanceToPlain(allTasks) as Task[];
            return res.json(allTasks).status(200);
        } catch (_errors){
            return res.json({error: 'Internal server error'}).status(500);
        }
    }

    // Method for the post route
    public async create(req: Request, res: Response): Promise<Response> {
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res
                .status(400)
                .json({ errors: errors.array() });
        }

        // Create a new instance of a task

        // Add all the required properties of the task object

        // save the newly created task to the database
    }

}

export const taskController = new TasksController();