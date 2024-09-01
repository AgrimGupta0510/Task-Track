import pg from "pg";
const Pool=pg.Pool;

const pool=new Pool({
    user: "postgres",
    host: "localhost",
    database: "perntodo",
    password: "agrim12345",
    port: 5432
})

export default pool;