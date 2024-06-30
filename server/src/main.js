import config from "./config.js"
import express from "express"
import cors from "cors"

import v1UsersRouter from "./v1/routes/usersRoutes.js"

const app = express()

app.use(cors({
    origin: config.origin
}))

app.use("/api/v1/users", v1UsersRouter)

app.listen(config.port, () => {
    console.log(`API is listening on port ${config.port}`);
})