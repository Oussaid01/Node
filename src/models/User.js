// 1: u need to create a schema
// 2: create a model based on this schema

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique: true},
    passwd: {type: String, required: true}
});

const User = mongoose.model("User",userSchema)


export default User