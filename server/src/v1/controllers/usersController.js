import usersService from "../services/usersService.js"

const getAllUsers = (req, res) => {
    res.send({
        status: 200, users: usersService.getAllUsers()
    })
}

const createUser = (req, res) => {
    const userInfo = req.body

    if (userInfo) {
        usersService.createUser(
            userInfo.firstName,
            userInfo.lastName,
            userInfo.age
        )

        res.send({ status: 200 })
    }
}

export {
    getAllUsers,
    createUser
}