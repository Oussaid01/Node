import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    desc : {type : string, required : true},
    steps : {type : string, required : true},
    isPubished : {type : Boolean, required : true},
    creationDate : {type : Date, required : true},
    passwd: {type: String, required: true}
});

const Recipe = mongoose.model("Recipe",recipeSchema)  


export default Recipe