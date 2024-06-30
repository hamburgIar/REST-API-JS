import usersService from "../services/usersService.js"

const getAllUsers = (req, res) => {
    res.send({
        status: 200, users: usersService.getAllUsers()
    })
}

export {
    getAllUsers
}