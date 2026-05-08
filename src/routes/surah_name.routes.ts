import { Router } from "express";

import validateRequest from "../middlewares/validate.middleware";

import { createSurahName, deleteSurahName, getAllSurahNames, getSurahNameByIndex } from "../controllers/surah_name.controller";

import { createSurahNameSchema } from "../schemas/surah_name.schema";

const router = Router();

router.get("/", getAllSurahNames);
router.get("/:index", getSurahNameByIndex);

router.post("/", validateRequest(createSurahNameSchema), createSurahName);

router.delete("/:id", deleteSurahName);

export default router;
