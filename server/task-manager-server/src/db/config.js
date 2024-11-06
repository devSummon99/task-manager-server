import pg from "pg";

export const connect = new pg.Pool ( {
    user:"admin",
    host: "localhost",
    port: "5433",
    password: "admin",
    database:"tasks"
})