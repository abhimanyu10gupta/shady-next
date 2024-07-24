import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema<BookingProps>({
    name : {
        type: String,
        required: true,

    },
    pax: {
        type: Number,
        required: true,

    },
    time: {
        type: String,
        required: true,

    },
    date: {
        type: String,
        required: true,

    },
    phone: {
        type: String,
        required: true,

    },
})

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);