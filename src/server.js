import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();

const PORT = process.env.PORT;
const app = express();


// middleware 
app.use(express.json())


app.use(cors())

app.use("/api/user",userRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT ",PORT)
    })
})
