// apa itu middleware

/*


apa itu middleware ? 
jadi middleware ini adalah function yang dijalankan ketika ada request dan sebelum response

jadi ketika kita bikin website itu alurnya adalah request response
jika kita membahas next js sebagai servernya

maka response pertama yang diberkan adalah halamant htmlnya
nah didalam html itu ada file file js yang perlu dipanggil pada tag scriptnya

jadi perlu didownload tuh
maka di browser akan melakukan request lagi untuk mendownload file tersebut
bukan hanya file js ya,tetapi file gambar video atau asset asset website kita 
yang lain

nah pada kasus tersebut kapan  middleware akan dieksekusi ?
sedangkan kalo kita lihat jika kita memiliki banyak file js atau asset asset yang
lain itu browser akan melakukan request ulang

nah jadi setiap ada request yang datang maka middleware akan dijalankan 
entah itu request berupa halaman html atau file js maka middleware akan tetap
dijalankan 

jadi kalo kita lihat middleware akan jilankan sebanyak request yang
datang ya

nah didalam middleware itu kita bisa memanipulasi responsenya sebelum response yang
sebenarnya diberikan

contoh 
kita melakukan pengecheckan token atau authorizaton pada route tertentu misalnya
pada route dasboard

jadi kalo misalkan tokennya itu salah atau tokennya itu ga ada akan diredirect ke
halaman login

jadi kita bisa melakukan manipulasi response pada middleware


nah sebenarnya middleware ini yang dibutuhkan next js dari dulu
didalam next js itu kita butuh getServerSideProps yang kita tulis disemua halaman
yang kita mau check apakah user itu sudah login atau belum misalnya

artinya kalo kita punya 10 halaman maka kita harus menuliskan getServerSidePropsnya
sebanyak 10 kali

nah ini kurang efisien ya
jadi kita menuliskan getServerSideProps yang banyak yang didalamanya
ada fungsi yang sama yaitu untuk mengecheck apakah user udah login atau belum

nah jadi itulah salah satu manfaat menggunakan middleware

oke mudah mudahan kalian paham ya apa itu middleware dan kenapa kita menggunakan
middleware pada next js

dimateri selanjutnya kita akan mencoba untuk membuat middleware
jadi ikuti terus materi middleware ini ya








































*/