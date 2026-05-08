import { Router } from "express";

import validateRequest from "../middlewares/validate.middleware";

import { createAudio, deleteAudio, getAllAudios, getSingleAudio, updateAudio } from "../controllers/audio.controller";

import { createAudioSchema, updateAudioSchema } from "../schemas/audio.schema";

const router = Router();

router.get("/", getAllAudios);
router.get("/:index", getSingleAudio);

router.post("/", validateRequest(createAudioSchema), createAudio);

router.patch("/:id", validateRequest(updateAudioSchema), updateAudio);

router.delete("/:id", deleteAudio);

export default router;
