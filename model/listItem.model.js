const mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: "Required"
    },
    userId: {
        type: String
    }
});

mongoose.model("ListItems", ItemSchema)