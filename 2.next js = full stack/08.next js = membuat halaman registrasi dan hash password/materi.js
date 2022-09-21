// membuat halaman registrasi dan encripsi password

/*

nah dimateri kali ini kita akan membuat halaman registrasi 
dan melakukan enkripsi password menggunakan bcriptjs

untuk itu kita langsung saja membuat shcema table usernya

knex migrate:make user_table

nah jika sudah kita akan melakukan enkripsi password jadi dihash 
setelah dihash tidak bisa dikembalikan ke awal

jadi supaya menjaga keamanan pengguna menggunakan bcript js 
jadi nanti user mengirimkan email dan password

kemudian passwordnya nanti akan kita hash menjadi seperti random string
tapi itu ada polanya 

jadi dia menggunakan salt, salt ini adalah random string 
dimana akan dibuat sebelum melakukan hash 

dan nanti si salt tadi akan dipakai untuk mengenkripsi password kita
atau istilahnya digabungkan dengan password kita yang nanti akan membentuk 
string baru 

nah tapi string baru tersebut dapat kita check saat user melakukan login
meskipun ada saltnya jadi tidak perlu kawatir

jadi nanti akan dicompere untuk mengecheck apakah sama antara password yang sudah
dihash dengan password aslinya 

jadi bukan didekripsi ya jadi tidak bisa dikembalikan ke karakter awalnya
contoh 


var bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);
jadi kita membuat saltnya dulu yang nanti akan kita gabungkan dengan password
10 itu adalah angka untuk menentukan kerumitan pembuatan saltnya

semakin tinggi maka semakin rumit
dan semakin rumit akan semakin lama pembuatannya 
dan juga comperenya 

maka kalian harus bijak saat memberikan kerumitan pada pembuatan saltnya
dan standartnya itu adalah 10

var hash = bcrypt.hashSync("B4c0/\/", salt);
lalu dihash 

nah hasil hash inilah yang nanti akan kita masukkan kedalam database kita
untuk mengecheck password tinggal dicompere saja

bcrypt.compareSync("B4c0/\/", hash); // true
bcrypt.compareSync("not_bacon", hash); // false

nah dengan bcrypt ini ketika kita melakukan hash password 123 misalnya
dan besok ada yang membuat password yang sama 123

maka hasil hashnya akan berbeda jadi itu akan lebih aman

nah sekarang kita install dulu ya 
npm i bcryptjs

dan sekarang kita buat enpoint registrasinya

/api/auth/register




























*/