const { model, Schema } = require("mongoose");
const event  = new Schema({
    eventId:{
        type: String,
    },
    title:{
        type: String,
    },
    description:{
        type: String,
    },
    image:{
        type: Buffer,
        contentType:String,
    },
    date:{
        type: Date,
    },
    hostId:{
        type: String,
    },
    streamId:{
        type: String,
        default: null,
    },
    started:{
        type: Boolean,
    },
    completed:{
        type: Boolean,
    }
})

module.exports = event;