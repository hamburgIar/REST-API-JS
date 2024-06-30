import User from "../models/user.js"

async function syncModels() {
    try {
        await User.sync()

        console.log("Модули БД синхронизированы")
    } 
    catch (error) {
        throw new Error(`Ошибка синхронизации модулей БД:\n${error}`)
    }
}

export default syncModels