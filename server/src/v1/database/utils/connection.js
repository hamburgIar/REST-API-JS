import config from "../../../config.js"

import { Sequelize } from "sequelize"

const sequelize = new Sequelize({
    dialect: config.dbDialect,
    storage: config.dbStorage
})

async function testDatabaseConnection() {
    try {
        await sequelize.authenticate()

        console.info("Подключение к БД успешно")
    } catch (error) {
        throw new Error(`Ошибка подключения к БД:\n${error}`)
    }
}

export {
    testDatabaseConnection,
    sequelize
}