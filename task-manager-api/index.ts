import express, { Express, Request, Response } from 'express';

// Instantiate express app
const app: Express = express();

// Define server port
const PORT = 3001;


// Create default route
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeSscript Server')
});

// Start listening to the requests on defined port
app.listen(PORT);