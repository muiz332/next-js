// nexrResponse
/*

nah dimateri kali ini kita akan belajar mengenai response apa yang akan kita
berikan pada client ketika kita menggunakan middleware

jadi setelah kita melakukan pengecheckan apakan dia sudah login atau
belum misalnya 

ketika client belum melakukan login maka kita berikan response redirect
didalam middleware kita

nah lalu response apa saja yang dapat kita berikan sebelum response
yang sebenarnya diberikan ?

nah didalam middleware kita bisa memberikan response berikut ini

1.nextResponse.next()  

nah ini adalah sebuah response yang sebenarnya walaupun kita tidak 
menuliskan nextResponse.next() si client akan mendapatkan response
yang sebenarnya

agar mudah dipahami saja
ketika kita menjalankan middleware itu pada suatu route ketika
bukan route yang kita inginkan maka kita akan memberikan respnse
yang biasa kita tinggal tulis saja nextResponse.next()

2.redirect
nah kita bisa mengembalikan response redirect kepada client

3.rewrite
kita bisa mengembalikan response yang lain dihalaman kita sesuai dengan url
absolute yang kita berikan

4.set response cookie
kita bisa membuat cookie dibagian server tanpa kita perlu menginstal js-cookie
jadi cookie server dengan cookie client itu berbeda ya 

kalo cookie yang kita buat dengan mengetur document.cookie maka cookie tersebut akan 
mudah untuk diganti

tapi kalo kita mengatur cookie lewat server dan httpOnly kita buat true
maka si cookie tersebut tidak dapat kita manipulasi pada document.cookie


5.set headers
kita bisa mengatur headersnya 

untuk itu langsung saja kita coba






































*/