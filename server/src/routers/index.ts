import {readFileSync, readdir, readdirSync} from "fs";
import path from "path";

import {Router} from "express";

const router = Router();

const baseName: string = path.basename(__filename);

readdirSync(__dirname)
    .filter((file: string) => {
        return (file !== baseName &&
        file.indexOf(".test") === -1 &&
        file.indexOf(".js") === -1)
    })
    .map((file: string) => {
        const filePath: string = path.join(__dirname, file);
        let fileName = file.split(".")[0]
        const endPoint = fileName ? `/${fileName}` : '/';
        const route = require(filePath);
        return (
            router.use(endPoint, route.default)
        );
    });

export default router;

