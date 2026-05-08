import { Schema, Document, model, Model } from "mongoose";

// Main Surah interface
export interface ISurahName extends Document {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: "Meccan" | "Medinan";
    createdAt?: Date;
    updatedAt?: Date;
}

const SurahNameSchema = new Schema<ISurahName>(
    {
        number: {
            type: Number,
            required: true,
            unique: true,
        },

        name: {
            type: String,
            required: true,
        },

        englishName: {
            type: String,
            required: true,
        },

        englishNameTranslation: {
            type: String,
            required: true,
        },

        numberOfAyahs: {
            type: Number,
            required: true,
        },

        revelationType: {
            type: String,
            enum: ["Meccan", "Medinan"],
            required: true,
        },
    },
    { timestamps: true },
);

const SurahName: Model<ISurahName> = model<ISurahName>("SurahName", SurahNameSchema);

export default SurahName;
