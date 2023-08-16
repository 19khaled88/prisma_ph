import cors from "cors";
import express, { Application } from "express";
import userRoutes from "./modules/users/user.routes";
import categoryRoutes from './modules/categories/category.routes'
import postRoutes from './modules/post/post.routes'
const app: Application = express();
app.use(express.json()); //middleware function. parses incoming JSON requests and puts the parsed data in req.body.
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.send({ message: "successful" });
});
app.use("/api/v1/user", userRoutes);
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/post',postRoutes)

export default app;
