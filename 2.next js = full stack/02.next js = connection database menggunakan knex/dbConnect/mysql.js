import knex from "knex";

const mysql = knex({
    client : "mysql",
    connection : {
        host : '127.0.0.1',
        port : 3306,
        user : 'root',
        password : '',
        database : 'nextjs_full_stack'
    }
})

export default mysql

/*

nah jadi kita buat configurasinya disini 
lalu kita export yang nantinya ini dapat kita gunakan pada setiap route
di API kita

nah sebenarnya configurasi ini nanti kita bisa simpan di dotenv
agar tidak ketahuan pada saat kita deploy 

valuenya saja yang disimpan di dotenv
tapi untuk sekarang kita coba seperti ini saja

nah setelah membuatnya 
kita harus inisialaisasikan file knex dengan
cara knex init

tapi kalo kita jalankan akan error
karena cmd tidak mengenali knex itu program apa karena
knex ada didalam folder node modules 

jadi kita harus masuk dulu kedalamnya supaya bisa menjalankan
agar lebih mudah kita manfaatkan npm dengan membuat script pada package.jsonnya

knex : "knex"

nanti npm akan mengambil library knex dari node modules
kalo kita jalankan tidak akan error

nah sekarang kita buat file knex dengan cara
npm run knex init

maka akan ada file baru dengan nama knexfile.js



*/