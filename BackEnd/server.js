const express = require("express");
const errorHandler = require("./Middlewares/errorMiddleware");
const connectDB=require("./config/db")
const PORT=process.env.PORT|| 5000
const app= express();
connectDB();
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/api/goals" , require("./Routers/routes"))


app.use(errorHandler)

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))