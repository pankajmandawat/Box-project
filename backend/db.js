const dataModel = require('./connection').dataModel;

var data = {}

data.find = async () => {
    let data = await dataModel.find()
    if (data) { return data }
    else {
        let err = new Error("No record found")
        err.status = 404
        throw err;
    }
}

module.exports = data;