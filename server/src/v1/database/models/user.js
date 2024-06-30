import { sequelize } from "../utils/connection.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("User", 
    {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        age: DataTypes.INTEGER
    },
    { 
        timestamps: false,
        tableName: "Users" 
    }
)

export default User