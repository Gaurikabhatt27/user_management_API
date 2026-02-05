import express from "express";

import{
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserById
} from "../controllers/user.controller.js"
import { checkAuth, validateUserId } from "../middlewares/auth.js";
import {validateCreateUserDTO} from "../dtos/user.dto.js"

const router = express.Router();

router.get("/", checkAuth, getUsers);
router.get("/:id", validateUserId, getUserById);
router.post("/", validateCreateUserDTO, createUser);
router.patch("/:id", validateUserId, updateUser);
router.delete("/:id", deleteUser);


export default router;