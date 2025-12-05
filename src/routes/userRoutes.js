import express from "express"
import { createUser, loginInUser } from "../controllers/userController.js"

const router = express.Router()



router.post("/register",createUser)
router.post("/login",loginInUser)



export default router;