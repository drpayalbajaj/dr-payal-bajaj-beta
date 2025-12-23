import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            minlength: [2, "Name must be at least 2 characters"],
            maxlength: [50, "Name cannot exceed 50 characters"]
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email"]
        },
        phone: {
            type: String,
            required: [true, "Phone number is required"],
            match: [/^[6-9][0-9]{9}$/, "Please provide a valid 10-digit mobile number"]
        },
        treatment: {
            type: String,
            required: [true, "Treatment selection is required"],
            enum: ["IVF", "IUI", "Fertility Counseling", "Other"]
        },
        emailSent: {
            type: Boolean,
            default: false
        },
        sheetSaved: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

contactSchema.index({ email: 1 });
contactSchema.index({ createdAt: -1 });

export const Contact = mongoose.model("Contact", contactSchema);