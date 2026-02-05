import express from "express";

import{
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById
} from "../controllers/user.controller.js"
import { checkAuth, validateUserId, validateZod } from "../middlewares/auth.js";
import {validateCreateUserDTO} from "../dtos/user.dto.js"
import { createUserSchema, updateUserSchema } from "../dtos/user.zod.js";

const router = express.Router();

router.get("/", checkAuth, getUsers);
router.get("/:id", validateUserId, getUserById);
router.post("/", validateZod(createUserSchema), createUser);
router.patch("/:id", validateZod(updateUserSchema), updateUser);
router.delete("/:id", deleteUser);


export default router;