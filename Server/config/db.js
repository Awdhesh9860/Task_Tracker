const mongoose = require("mongoose");

// Connect to MongoDB
module.exports.connectDb = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
}