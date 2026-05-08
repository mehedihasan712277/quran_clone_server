import { z } from "zod";

// base schema
const surahNameSchema = z.object({
    number: z.number().min(1, {
        message: "Surah number must be at least 1",
    }),

    name: z.string().min(1, {
        message: "Arabic name is required",
    }),

    englishName: z.string().min(1, {
        message: "English name is required",
    }),

    englishNameTranslation: z.string().min(1, {
        message: "English name translation is required",
    }),

    numberOfAyahs: z.number().min(1, {
        message: "Number of ayahs must be at least 1",
    }),

    revelationType: z.enum(["Meccan", "Medinan"], {
        message: "Revelation type must be either Meccan or Medinan",
    }),
});

// create
export const createSurahNameSchema = z.object({
    body: z.union([
        surahNameSchema,
        z.array(surahNameSchema).min(1, {
            message: "At least one surah is required",
        }),
    ]),
});

// update
export const updateSurahNameSchema = z.object({
    body: surahNameSchema.partial(),
});
