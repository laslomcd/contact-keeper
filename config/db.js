// unused URI "mongodb+srv://ryan:murphy#1@contactkeeper-9bbo8.mongodb.net/test?retryWrites=true&w=majority"

const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Still Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  //   mongoose
  //     .connect(db, {
  //       useNewUrlParser: true,
  //       useCreateIndex: true,
  //       useFindAndModify: false,
  //       useUnifiedTopology: true,
  //     })
  //     .then(() => console.log("MongoDB Connected"))
  //     .catch((err) => {
  //       console.error(err.message);
  //       process.exit(1);
  //     });
};

module.exports = connectDB;
