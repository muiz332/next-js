// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '',
      database : 'nextjs_full_stack'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};


/*

nah disini ada 3 fase
fase development staging dan production

nah sekarang kita ada difase development

untuk connectionnya kalian ubah menjadi connection pada file mysql.js
ya

nah sekarang kita membuat file migrasi 
migrasi ini memudahkan kita untuk menentukan serangkaian perubahan skema sehingga memutakhirkan database menjadi sangat mudah.

Sama seperti Anda menggunakan sistem kontrol versi seperti Git untuk mengelola perubahan dalam kode sumber Anda, Anda dapat menggunakan migrasi untuk melacak perubahan pada database. Dengan migrasi, Anda dapat mentransfer database yang ada ke status lain dan sebaliknya: Transisi status tersebut disimpan dalam file migrasi, yang menjelaskan cara menuju ke status baru dan cara mengembalikan perubahan untuk kembali ke status lama.

jadi nanti kita bisa melakukan rollback untuk kembali ke kondisi sebelumnya
jadi ini sangat menguntungkan apabila ada hal yang salah lalu kita
ingin kembali ke keadaan sebelumnya

nah untuk membuat migrasi 
dengan cara menuliskan

npm run knex migrate:make nama_migrasinya

 npm run knex migrate:make create_post_table

nah sebenarnya didalam documentasinya kalian disuruh untuk menginstall
knex secara global ketika menggunakan migrate

tapi tidak apa apa kita gunakan npm saja untuk mengambil knex dari node_modules
kalo kita jalankan 


maka akan ada folder baru dengan nama migrations
yang didalamnya ada sebuah file

jadi sampai disini dulu cara membuat configurasi pada knex
dan conection database

dimateri selanjutnya kita akan belajar membuat schema table
dari folder migration 



*/