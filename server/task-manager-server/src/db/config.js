import pg from "pg";

export const connect = new pg.Pool ( {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})