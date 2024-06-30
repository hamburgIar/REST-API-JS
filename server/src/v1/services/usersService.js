import User from "../database/models/user.js"

const getAllUsers = () => { 
    return {}
}

const createUser = (firstName, lastName, age) => {
    User.create({
        firstName: firstName, 
        lastName: lastName, 
        age: age
    })
}

export default {
    getAllUsers,
    createUser
}