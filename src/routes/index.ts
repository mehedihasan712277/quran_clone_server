import { Router } from "express";

import surahRoutes from "./surah.routes";
import translationRoutes from "./translation.routes";
import surahNameRoutes from "./surah_name.routes";
import audioRoutes from "./audio.routes";

const router = Router();

router.use("/surahs", surahRoutes);
router.use("/translations", translationRoutes);
router.use("/surahnames", surahNameRoutes);
router.use("/audios", audioRoutes);

export default router;
