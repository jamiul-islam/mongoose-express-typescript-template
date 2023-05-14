import express, { Application } from "express";
import cors from "cors";

// application route
import userRoute from "./app/modules/user/user.route";

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// hitting routes
app.use("/api/v1/user", userRoute);

export default app;
