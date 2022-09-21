/*


nah disini ada function up dan down, dimana up ini ketika kita melakukan migration
biasanya isinya adalah create table atau sesuatu yang menambahkan ke database

kemduian yang down itu biasanya rollbacknya
jadi fungsi kebalikan dari upnya

misalnya kita buat table diupnya
dan didownnya kita tinggal drop table saja

jadi ketika ada database yang salah kita bisa rollback
atau diundow

nah kita coba tambahkan table dengan nama post


*/


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {


  return knex.schema.createTable("post",function(table){
    table.increments('id')
    table.string('title').notNullable()
    table.text('content')
    table.timestamps(true,true)

    /*
    
    timestamps ini akan membuat 2 buah column yaitu createAt dan updateAt
    dan dia memiliki 2 buah parameter yang pertama itu adalah datanya timestamps atau datetime

    kalo true dia menggunakan timestime
    parameter kedua itu adalah nilai defaultnya 

    
    */


  })

  /*
  
  nah create table ini memiliki 2 parameter yang pertama adalah 
  nama tablenya dan yang kedua adalah schemanya dimana dia berbentuk 
  callback dengan parameternya yaitu table tersebut

  
  nah selanjutnya kita buat downnya 
  tinggal kita drop saja

  
  */
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('post')
};



/*


nah ketika kita seleai menuliskan function up dan downnya 
kita tinggal update database yang kita buat dari schema tersebut
dengan cara menjalankan

npm run knex migrate:latest

kalo kalian check didalam database 
maka akan ada 3 buat table 

table knex_migrations dan knex_migrations_lock

itu digunakan untuk mencatat migrationnya supaya tahu kalo mau 
rollback itu kemana

nah kalo kalian lihat pada table knex_migrations itu isinya
seperti ini

MariaDB [nextjs_full_stack]> select * from knex_migrations;
+----+-------------------------------------+-------+---------------------+
| id | name                                | batch | migration_time      |
+----+-------------------------------------+-------+---------------------+
|  1 | 20220714114447_create_post_table.js |     1 | 2022-07-14 19:22:14 |
+----+-------------------------------------+-------+---------------------+

yaitu migrations yang sudah kita buat tadi dengan menjalankan perinta
npm run knex migration:make create_post_table

dan juga ada table post yaitu schema table yang sudah kita buat
kalo misalkan kita desc post maka akan tampil seperti ini

+------------+------------------+------+-----+---------------------+----------------+
| Field      | Type             | Null | Key | Default             | Extra          |
+------------+------------------+------+-----+---------------------+----------------+
| id         | int(10) unsigned | NO   | PRI | NULL                | auto_increment |
| title      | varchar(255)     | NO   |     | NULL                |                |
| content    | text             | YES  |     | NULL                |                |
| created_at | timestamp        | NO   |     | current_timestamp() |                |
| updated_at | timestamp        | NO   |     | current_timestamp() |                |
+------------+------------------+------+-----+---------------------+----------------+
5 rows in set (0.011 sec)

nah nanti kalo kalian ingin menambahkan panjang dari varcharnya
kalian gunakan method string(column name,length) diparameter kedua

jadi seperti itu cara membuat schema table pada knex
mudah mudahan kalian paham




*/