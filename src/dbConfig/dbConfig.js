import mongoose from "mongoose";

export async function connectDB() {
    try {
        mongoose.connect(process.env.MONGODB_URL);

        const connection = mongoose.connection;

        connection.on("error", (error) => {
            console.error("Error connecting to MongoDB:", error);
        });
        connection.on("disconnected", () => {
            console.log("Disconnected from MongoDB");
            process.exit();
        });

        console.log("Connected to MongoDB");

    }catch(error){
        console.log("something went wrong in connecting to db", error);
    }

}