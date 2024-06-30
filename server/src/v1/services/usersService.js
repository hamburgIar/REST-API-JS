import DB from "../database/db.json" with {type: "json"}

const getAllUsers = () => { 
    return DB.users
}

export default {
    getAllUsers
}