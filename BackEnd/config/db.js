const mongoose=require("mongoose");


const connectDB=async ()=>{

try {
    const connectMongo=await mongoose.connect("mongodb+srv://murka:98534993@cluster0.opzf2y6.mongodb.net/mern?retryWrites=true&w=majority")
    console.log(`MongoDB connected: ${connectMongo.connection.host}`)
} catch (error) {
    console.log(error)
    process.exit(1)
}
}

module.exports=connectDB;