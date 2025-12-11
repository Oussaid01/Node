import mongoose from "mongoose";

const recipeListSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true}
});

const RecipeList = mongoose.model("RecipeList",recipeListSchema)  


export default RecipeList