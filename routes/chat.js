import express from 'express';
const router = express.Router();

import { wrapAsync } from "../util/wrapAsync.js";
import { verifyAuth } from "../util/verfiyAuth.js";
import {getAllThreads,createThread,getThread,sendMessage,deleteThread} from "../controllers/chatController.js";

// Routes
router.get("/", verifyAuth, wrapAsync(getAllThreads));
router.post("/new", verifyAuth, wrapAsync(createThread));
router.get("/:threadId", verifyAuth, wrapAsync(getThread));
router.post("/:threadId/message", verifyAuth, wrapAsync(sendMessage));
router.delete("/:threadId", verifyAuth, wrapAsync(deleteThread));

export default router;
