const mongoose = require("mongoose");

const authuserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    authuser_id: {
        type: String,
        required: true
    }
}, {timestamps: true});

module.exports = mongoose.model("AuthUser", authuserSchema);