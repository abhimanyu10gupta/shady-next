import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    time: {type: String},
})

export default mongoose.models.Events || mongoose.model("Events", eventSchema);