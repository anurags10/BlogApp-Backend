import express  from "express";
import { getAllUser, login, signup } from "../controller/user-controller";

const router = express.Router();

// for router we need controller functions which is in controller folder

router.get('/',getAllUser);
router.post('/signup',signup);
router.post('/login',login)

export default router;