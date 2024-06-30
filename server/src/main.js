import config from "./config.js"
import express from "express"
import cors from "cors"
import syncModels from "./v1/database/utils/syncModels.js"

import v1UsersRouter from "./v1/routes/usersRoutes.js"

import { testDatabaseConnection } from "./v1/database/utils/connection.js"

await testDatabaseConnection()
await syncModels()

const app = express()

app.use(express.json())
app.use(cors({
    origin: config.origin
}))

app.use("/api/v1/users", v1UsersRouter)

app.listen(config.port, () => {
    console.log(`API is listening on port ${config.port}`);
})