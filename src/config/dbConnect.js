import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:12345@cluster0.bovay4l.mongodb.net/alura-node ");

let db = mongoose.connection;

export default db;