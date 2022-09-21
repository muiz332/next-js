import knex from 'knex'

const mysql = knex({
    client : "mysql",
    connection : {
        host : '127.0.0.1',
        port : 3306,
        user : "root",
        password : "",
        database : "nextjs_full_stack"
    }
})

export default mysql