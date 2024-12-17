const pool = require("./pool");

async function getJuice(){
    try{
        const { rows } = await pool.query("SELECT * FROM juice ORDER BY id asc;");
        const juice = rows;
        return juice
    }catch(err){
        return console.log(err);
    }
}

module.exports = {
    getJuice
}