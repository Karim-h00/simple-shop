const pool = require("./pool");

async function populateDB(){
    await pool.query(`CREATE TABLE IF NOT EXISTS juice (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  flavor VARCHAR ( 255 ),
  amount INTEGER,
  price INTEGER
);`)

await pool.query (`INSERT INTO juice (flavor, amount, price)
    VALUES('banana', 5, 5.00),
    ('mango', 5, 8.99);
    `)
}

populateDB();