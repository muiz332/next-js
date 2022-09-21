// migration dan schema table

/*

nah kemarin kita sudah tahu bahwa migrasi itu fungsinya seperti git
kita bisa melakukan rollback atau kembali ke keadaan sebelumnya
menggunakan migration:rollback

nah saya ingatkan lagi untuk menggunakan knex kita harus install knexnya
dengan cara

npm i knex --save
dan mysqlnya
npm i mysql

untuk menggunakan migration kalian juga disarankan untuk
menginstall secara global setelah kalian menginstal knexnya
dengan cara

npm i knex -g

tapi kita tidak akan mencoba untuk menginstall secara global ya
nah untuk itu kita harus mengatur package.jsonya 

pada bagian script kita bisa tambahkan perintah lagi 
untuk mengjalankan knexnya

"knex" : "knex"

dimana nanti si npm akan mengambil program knex pada node module
nah setelah kalian install knexnya 

kalian bisa buat satu folder yang isinya adalah file untuk connection databasenya
kalian bisa kasih namanya db atau bebas

nah setelah itu kita gunakan fitur migrate pada knex
dengan cara kita beritahu dulu akan menggunakan fitur migrate 

kita tuliskan npm run knex init
nah nanti akan ada file knexfile.js yang sisinya step step pengembangan 
aplikasi kita dan kalian bisa ubah connectionnya pada developmentnya

mulai dari development, staging, dan production
nah setelah itu kita biasa membuat migatenya dengan cara

npm run knex migrate:make nama migratenya

setelah kita jalankan maka akan ada folder baru dengan nama
migrations yang isinya satu file yaitu migrasi table post


nah sekarang untuk membuat schema table nya kita pergi ke file tersebut


































*/