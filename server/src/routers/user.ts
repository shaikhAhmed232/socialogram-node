import {Router} from "express";
import { getUser } from "../controllers/user";

const userRouter = Router();

userRouter.route('/').get(getUser);


export default userRouter;