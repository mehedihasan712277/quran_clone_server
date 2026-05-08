import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
    PORT: z.string().transform(Number).default(4000),
    MONGO_URI: z.string().nonempty("MONGO_URI is required"),
});

export const env = envSchema.parse(process.env);
