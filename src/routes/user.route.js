import express from "express";
import * as authController from "../controller/user.controller.js";
import { asyncWrapper } from "../utils/wrapper.js";

const router = express.Router();

router.post("/register", asyncWrapper(authController.register));
router.post("/register2", asyncWrapper(authController.register2));
router.post("/login", asyncWrapper(authController.login));
router.get("/get-me", asyncWrapper(authController.getUser));
router.get("/refresh-token", asyncWrapper(authController.refreshToken));
router.get("/logout", asyncWrapper(authController.logout));
router.get("/logout-all", asyncWrapper(authController.logoutAll));
router.post("/verify-email", asyncWrapper(authController.verifyEmail));

export default router;
