import { Router } from "express";
const router = Router();
import { urlShortner } from "../controllers/urlController.js";

router.post("/shorten", urlShortner);

export default router;
