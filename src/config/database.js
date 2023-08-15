const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
      console.log(`DB is connected!`);
    })
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
