import { Router } from "express";
const router = Router();
import { urlShortner, redirectUrl } from "../controllers/urlController.js";

router.post("/shorten", urlShortner);
router.get("/:code", redirectUrl);

export default router;
