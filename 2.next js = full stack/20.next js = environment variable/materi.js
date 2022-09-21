// env

/*

nah kali ini kita akan menambahkan enviroment variable agar
sesuatu yang bersifat rahasia akan aman dan tidak dapat dilihat
ketika file kita diupload dihosting

didalam next js itu sudah ada envnya 
tinggal kita bikin file dengan nama .env.local

kita akan tambahkan variable untuk menyimpan db connectionnya



nah tapi kalian tidak akan bisa menggunakannya pada file knexfile karena
knexfile tidak dijalankan dinextnya tapi kita jalankan sendiri 

oleh karena itu kalian sebenarnya bisa menambahkan 
parmeter pada saat pemanggilan knexnya di peckage.json

discriptnya 

"knex" : "client=mysql knex"

nah jadi kita kirimkan envnya disitu
tapi nanti akan panjang

lebih baik kita ambil saja env dari nextjs saja
kita bisa install modulenya yaitu dotenv cli

npm i dotenv-cli

nah nanti kalian bisa tulis pada scriptnya seperti ini

"knex" : "dotenv -e .env.local knex"

maka akan berjalan nanti saat membuat migrate atau
menerapkan migratenya
























*/