import express from "express"
import { createRecipe, deleteRecipe, getAllRecipies, getRecipeById, updateRecipe } from "../controllers/recipeController.js"

const router = express.Router()



router.get("/", getAllRecipies)
router.get("/:id", getRecipeById)
router.post("/", createRecipe)
router.put("/:id", updateRecipe)
router.delete("/:id", deleteRecipe)



export default router;