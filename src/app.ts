import cors from "cors";
import express, { Application } from "express";
import userRoutes from './modules/users/user.routes'
const app: Application = express();
app.use(express.json()); //middleware function. parses incoming JSON requests and puts the parsed data in req.body.
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.use('/api/v1', userRoutes)

export default app;
