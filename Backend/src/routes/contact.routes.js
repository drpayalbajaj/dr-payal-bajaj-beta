import { Router } from "express";
import { createContact, getAllContacts } from "../controllers/contact.controller.js";

const router = Router();

router.route("/").post(createContact);
router.route("/all").get(getAllContacts);

export default router;