import express from "express";
import { getSection } from "../controllers/rssFeed.controller";
import { theGuardianSectionValidator } from "../middlewares/validators";

const router = express.Router();

router.get("/:section", theGuardianSectionValidator, getSection);

export default router;
