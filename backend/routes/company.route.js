import express from "express";
import {
  getCompany,
  getCompanyById,
  registerCompany,
  updateCompany,
} from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").post(registerCompany);
router.route("/getCompany/:userId").get(getCompany);
router.route("/get/:id").get(getCompanyById);
router.route("/update/:id").put(updateCompany);

export default router;
