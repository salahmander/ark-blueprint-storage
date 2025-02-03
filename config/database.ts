import mongoose from "mongoose";

let connected = false;

/**
 * Asynchronously connects to the MongoDB database using the connection URI
 * specified in the environment variable `MONGODB_URI`. It sets the `strictQuery`
 * option to true for Mongoose.
 *
 * If the database is already connected, it logs a message and returns immediately.
 * Otherwise, it attempts to connect to the database and logs the connection status.
 *
 * @throws Will log an error message if the connection attempt fails.
 */
const connectDB = async () => {
    mongoose.set("strictQuery", true);
  
    if (connected) {
      console.log("Already connected to database");
      return;
    }
  
    try {
      await mongoose.connect(process.env.MONGODB_URI!);
      console.log("Connected to database");
      connected = true;
    } catch (error) {
      console.error("Error connecting to database: ", error);
    }
  };
  
  export default connectDB;
  