import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URI_MONGO);

  console.log("Connect DB");
} catch (error) {
  console.log("Conexion a mongoDB");
}
