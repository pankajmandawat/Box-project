const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/users', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => {
        let err = new Error("Could not connect to Database")
        err.status = 500;
        throw err;
    })
const schema = {
    "firstname": {
        required: [true, 'Required field'],
        type: String,
    },
    "lastname": {
        required: [true, 'Required field'],
        type: String,
    },
    "username": {
        required: [true, 'Required field'],
        type: String,
    },
    "password": {
        required: [true, 'Required field'],
        type: String,
    },
    "progress": {
        type: [
            {
                "name": {
                    required: [true, 'Required field'],
                    type: String
                },
                "color": {
                    required: [true, 'Required field'],
                    type: String
                }
            }
        ] 
    }
}
let userSchema = mongoose.Schema(schema, { collection: 'users', timestamps: true });
exports.userModel = mongoose.model("users", userSchema);