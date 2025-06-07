
const pool = require("../config/pool")

async function  createUser(username, age) {

    try {

    let {rows} = await pool.query("INSERT INTO users (username, age) VALUES ($1,$2) RETURNING *", [username, age])
    return rows
        
    } catch (error) {
        throw new Error(`.Error: ${error.message}`)
    }


}
module.exports = createUser