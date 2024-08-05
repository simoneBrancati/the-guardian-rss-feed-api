import express from "express";
import { getSection } from "../controllers/rssFeed.controller";

const router = express.Router();

router.get("/:section", getSection);

export default router;
