import {Router} from "express";
import {getCategoryNames} from "../controllers/common.controller.js";

const router = Router();
router.get("/getCategoryNames", getCategoryNames);

export default router;