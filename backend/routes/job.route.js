import express from "express";
import {
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(postJob);
router.route("/get").get(getAllJobs);
router.route("/getadminjobs/:userId").get(getAdminJobs);
router.route("/get/:id").get(getJobById);

export default router;
