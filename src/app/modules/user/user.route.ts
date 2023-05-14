import express from "express";
import {
  createUserController,
  getAdminController,
  getUserByIdController,
  getUserController,
} from "./user.controller";

const router = express.Router();

// localhost:3000/api/v1/user
router.get("/", getUserController);
// localhost:3000/api/v1/user/admins
router.get("/admins", getAdminController);
// localhost:3000/api/v1/user/id
router.get("/:id", getUserByIdController);
// localhost:3000/api/v1/user/create-user
router.post("/create-user", createUserController);

export default router;

// router --> controller --> service
