const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    //this catch block needs to be removed to close the server when unhandled error occurs
    // server is closed in server.js file
    // .catch((err)=>{
    //   console.log(err)
    // });
};

module.exports = connectDatabase;
