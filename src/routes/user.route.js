import express from "express"
import * as authController from "../controller/user.controller.js";
import {asyncWrapper} from "../utils/wrapper.js"

const router = express.Router();

router.post("/register",asyncWrapper(authController.register))
router.get("/get-me",asyncWrapper(authController.getUser))
router.get("/refresh-token",asyncWrapper(authController.refreshToken))

export default router;