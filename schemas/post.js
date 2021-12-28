const mongoose = require("mongoose");

const { Schema } = mongoose;
const psotSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    write: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    time: {
        type: Number,
    }
});
module.exports = mongoose.model("Post", psotSchema)