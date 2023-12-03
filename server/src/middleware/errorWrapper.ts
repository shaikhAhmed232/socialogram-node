import {IRequest, IResponse, INextFunction} from "../custom/express";
import { CustomError } from "../errors";
import status from "../utils/status";

type controllerSign = (req: IRequest, res: IResponse, next?:INextFunction) => void; 

const errorWrapper = (controller: controllerSign) => async (req: IRequest, res: IResponse, next: INextFunction) => {
    try {
        await controller(req, res, next);
    } catch (error : unknown) {
        if (error instanceof CustomError) {
            console.log("not instance of error")
            return res.json(JSON.stringify(error));
        };
        console.log(error);
        return res.status(status.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong", 
        });
    }
};

export default errorWrapper;