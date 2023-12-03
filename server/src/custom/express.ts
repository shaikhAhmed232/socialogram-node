import {Request, Response, NextFunction} from "express";

export interface IRequest extends Request {
    jwt?: string;
};

export interface IResponse extends Response {};

export interface INextFunction extends NextFunction {};