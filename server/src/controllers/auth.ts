import {Request, Response} from "express";
import {IRequest} from "../custom/express";

export const login = async (req: IRequest, res: Response) => {
    return res.send("Yep")
}