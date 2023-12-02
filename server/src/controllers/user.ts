import {Request, Response} from "express";
import db from "../models";

export const getUser = async (req:Request, res:Response) => {
    const user = await db.User.findAll();
    res.send(JSON.stringify(user));
};