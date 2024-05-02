const Schema = require('mongoose').Schema;
const mongoose = require('mongoose');

const UserDataSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId, 
        ref: "User", 
        required: true
    },
    content: {
        type: String, 
        required: true,
    }
});

UserDataSchema.virtual("formatted_date").get(function() {
    return DateTime.fromJSDate(this.time_stamp).toLocaleString(DateTime.DATETIME_FULL);
})

module.exports = mongoose.model("UserData", UserDataSchema);