import { Router } from "express";

import validateRequest from "../middlewares/validate.middleware";

import { createSurah, deleteSurah, getAllSurahs, getSingleSurah } from "../controllers/surah.controller";

import { createSurahSchema } from "../schemas/surah.schema";

const router = Router();

router.get("/", getAllSurahs);
router.get("/:index", getSingleSurah);

router.post("/", validateRequest(createSurahSchema), createSurah);

router.delete("/:id", deleteSurah);

export default router;
