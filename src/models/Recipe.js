import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    desc : {type : String, required : true},
    steps : {type : String, required : false},
    isPubished : {type : Boolean, required : false},
    creationDate : {type : Date, required : false}
});

const Recipe = mongoose.model("Recipe",recipeSchema)  


export default Recipe