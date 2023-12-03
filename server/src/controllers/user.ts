import db from "../models";
import { IRequest, IResponse } from "../custom/express";
import {getUsers, getUser} from "../services/user";
import status from "../utils/status";
import { ApiErrorResponse, ApiSuccessResponse } from "../custom/response";

export const getUesrList = async (req:IRequest, res:IResponse) => {
    const userList = await getUsers();
    res.status(status.OK).json(userList);
    return;
};

export const getUserById = async (req: IRequest, res: IResponse) => {
    const response = await getUser(req.params.id);
    if (response instanceof ApiErrorResponse) {
        res.status(response.error.code).json(response);
        return;
    }
    res.status(status.OK).send(response);
    return;
}

export const createUser = async (req: IRequest, res: IResponse) => {
    const user = await db.User.create(req.body);
}