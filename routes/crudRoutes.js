import { Router } from "express";
import {
  getAllTask,
  updateTask,
  deleteTask,
  getAllTaskById,
  add,
  updateTaskStatus,
} from "../controllers/crudController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.post("/add_task", add);
router.get("/all_task", getAllTask);
router.get("/:id", getAllTaskById);
router.put("/update_task/:id", updateTask);
router.put("/update_task_status/:id", updateTaskStatus);

router.delete("/delete_task/:id", deleteTask);

export default router;
