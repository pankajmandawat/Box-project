const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/dataDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => {
        let err = new Error("Could not connect to Database")
        err.status = 500;
        throw err;
    })
const schema = {
    "name": {
        required: [true, 'Required field'],
        type: String,
    },
    "arr": {
        required: [true, 'Required field'],
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
        ],
    }
}
let dataSchema = mongoose.Schema(schema, { collection: 'app_data', timestamps: true });
exports.dataModel = mongoose.model("app_data", dataSchema);