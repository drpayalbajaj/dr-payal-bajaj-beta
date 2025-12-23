import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Contact } from "../models/contact.model.js";
import { sendEmail } from "../services/email.service.js";
import { saveToGoogleSheets } from "../services/googleSheets.service.js";

const createContact = asyncHandler(async (req, res) => {
    const { name, email, phone, treatment } = req.body;

    if (!name || !email || !phone || !treatment) {
        throw new ApiError(400, "All fields are required");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        treatment
    });

    if (!contact) {
        throw new ApiError(500, "Failed to save contact information");
    }

    let emailSent = false;
    try {
        await sendEmail({ name, email, phone, treatment });
        emailSent = true;
        await Contact.findByIdAndUpdate(contact._id, { emailSent: true });
    } catch (emailError) {
        console.error("Email failed:", emailError.message);
    }

    let sheetSaved = false;
    try {
        await saveToGoogleSheets({
            name,
            email,
            phone,
            treatment,
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        });
        sheetSaved = true;
        await Contact.findByIdAndUpdate(contact._id, { sheetSaved: true });
    } catch (sheetError) {
        console.error("Sheets failed:", sheetError.message);
    }

    return res.status(201).json(
        new ApiResponse(
            201,
            { contactId: contact._id, emailSent, sheetSaved },
            "Thank you for contacting us! We'll get back to you soon."
        )
    );
});

const getAllContacts = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    const contacts = await Contact.find()
        .sort({ createdAt: -1 })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .select('-__v');

    const count = await Contact.countDocuments();

    return res.status(200).json(
        new ApiResponse(200, {
            contacts,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            total: count
        }, "Contacts fetched successfully")
    );
});

export { createContact, getAllContacts };