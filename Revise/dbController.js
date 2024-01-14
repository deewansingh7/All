const mongoose = require('mongoose');

try {
    const dbController = async () => {
        const uri = process.env.link;
        await mongoose.connect(uri);
        console.log("MongoDB connected!!");
    }
    module.exports = { dbController };
} catch (error) {
    console.log(error);
}