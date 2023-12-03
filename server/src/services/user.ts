import db from "../models";
import { Op } from "sequelize";
import { CustomError } from "../errors";
import { IUser, UserList, SingleUser } from "../custom/user";
import { ErrorResp } from "../custom/error";
import {ApiErrorResponse, ApiSuccessResponse} from "../custom/response";

export const getUsers = async (): Promise<ApiSuccessResponse<UserList>>  => {
    const users = await db.User.findAll();
    let respData: UserList = {
        users,
    }
    let response: ApiSuccessResponse<UserList> = new ApiSuccessResponse(respData);
    return response;
};

export const getUser = async (findCondition: number | string): Promise<ApiSuccessResponse<SingleUser> | ApiErrorResponse<CustomError>> => {
    let condition;
    if (typeof findCondition == "number") {
        condition = {
            id: findCondition,
        }
    } else {
        condition = {
            [Op.or]: [
                {username: findCondition},
                {email: findCondition},
            ]
        }
    }
    const user = await db.User.findOne({where: condition});
    let response: ApiSuccessResponse<SingleUser> | ApiErrorResponse<CustomError>;
    if (user) {
        response = new ApiSuccessResponse<SingleUser>(user);
    } else {
        let errorResp: CustomError = new CustomError("User not found", 404);
        response = new ApiErrorResponse<CustomError>(errorResp);
    };
    return response;
}