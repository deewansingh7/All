const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUrl = process.env.MOONGOOSE_URL;
  try {
    const connect = await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (e) {
    process.exit(1);
  }
};
