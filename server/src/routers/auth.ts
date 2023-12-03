import { Router } from "express";

import {login} from "../controllers/auth"

const router = Router();

router.route("/").get(login);

export default router;