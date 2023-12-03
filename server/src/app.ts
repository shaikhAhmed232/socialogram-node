import express, {Request, Response} from "express";
const app = express();
import userRouter from "./routers/user";
import indexRouter from "./routers";

app.get("/", (req:Request, res:Response) => {
    res.send("<h1>Welcome to Socialogram App</h1>");
});
app.use("/api", indexRouter);

export default app;