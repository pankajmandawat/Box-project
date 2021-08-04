const userModel = require('./connectionUsers').userModel;

var user = {}

user.find = async (username) => {
    try {
        let user1 = await userModel.find({ "username": username })
        return user1
    }
    catch (err) {
        console.log(err);
    }
}

user.create = async (frstname, lstname, usrname, pasword, progressArray) => {
    try {
		
        let user1 = await userModel.create({
            "firstname": frstname, "lastname": lstname,
            "username": usrname, "password": pasword, "progress": progressArray
        })
		
        return user1
    }
    catch (err) {
        console.log(err);
    }
}

user.update = async (usrname, progress, next_progress) => {
    try {
        var user1 = await userModel.updateOne(
            { "username": usrname, "progress.name": progress },
            {
                $set:
                {
                    "progress.$.color":
                        "green"
                }
            })
        if (user1) {
            console.log(user1);
            var user2 = await userModel.updateOne(
                { "username": usrname, "progress.name": next_progress },
                {
                    $set:
                    {
                        "progress.$.color":
                            "blue"
                    }
                }
            )
        }
        if (user2){
            console.log(user2);
            return user2
        }
    }
    catch (err) {
        console.log(err);
    }
}

user.findProgress = async (username) => {
    try {
        var progress = await userModel.findOne(
            {
                "username": username
            },
            {
                "progress": 1
            }
        )
        return progress
    } catch (error) {
        console.log(error);
    }
}

module.exports = user;