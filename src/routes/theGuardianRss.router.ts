import express from "express";
import { getSection } from "../controllers/rssFeed.controller";
import { theGuardianSectionValidator } from "../middlewares/validators";
import cors, { CorsOptions } from "cors";

const router = express.Router();

const corsOptions: CorsOptions = {
  origin: "https://simonebrancati.github.io",
  methods: ["GET", "OPTIONS"],
};
router.get(
  "/:section",
  cors(corsOptions),
  theGuardianSectionValidator,
  getSection,
);

export default router;
