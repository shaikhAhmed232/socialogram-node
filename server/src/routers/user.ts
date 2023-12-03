import {Router} from "express";
import { getUesrList, getUserById } from "../controllers/user";
import errorWrapper from "../middleware/errorWrapper";

const userRouter = Router();

userRouter.get("/", errorWrapper(getUesrList));
userRouter.get("/:id", errorWrapper(getUserById));


export default userRouter;