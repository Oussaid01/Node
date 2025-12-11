import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import recipeRoutes from "./routes/recipeRoutes.js"

dotenv.config();

const PORT = process.env.PORT;
const app = express();


// middleware 
app.use(express.json())


app.use(cors())

app.use("/api/user",userRoutes)
app.use("/api/recipe",recipeRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT ",PORT)
    })
})
