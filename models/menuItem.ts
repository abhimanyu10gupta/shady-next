import mongoose, { mongo } from "mongoose";

const menuItemSchema = new mongoose.Schema<MenuItemProps>({
    name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    price : {
        type: String,
        required: true,

    }
})

export default mongoose.models.MenuItem || mongoose.model("MenuItem", menuItemSchema);