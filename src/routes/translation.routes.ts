import { Router } from "express";

import validateRequest from "../middlewares/validate.middleware";

import { createTranslation, deleteTranslation, getAllTranslations, getTranslationByIndex } from "../controllers/translation.controller";
import { createTranslationSchema } from "../schemas/translation.schema";

const router = Router();

router.get("/", getAllTranslations);
router.get("/:index", getTranslationByIndex);

router.post("/", validateRequest(createTranslationSchema), createTranslation);

router.delete("/:id", deleteTranslation);

export default router;
