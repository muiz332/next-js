// nested route middleware

/*

nah dimateri kali ini kita akan belajar nested route middleware
dimana kita akan menjalankan middleware pada parent route yang
sama 

contoh jika kita memiliki route seperti ini

/dashboard/produk

dan ketika kita memiliki conditional statements pada middlewarenya seperti ini

req.nextUrl.pathname === '/dashboard'

maka middleware tersebut akan berjalan pada route /dashboard saja
ketika kita memiliki route /dashboard/user maka middleware tersebut
tidak akan dijalankan 

karena itu route yang berbeda tetapi parent route yang sama
nah bagaimana caranya agar si middleware ini tetap dijalankan para 
parent route yang sama ?

kita bisa menggunakan method startsWith pada javascript
untuk mengecheck apakah sebuah url diawali dengan suatu url 
tertentu

untuk itu langsung saja kita coba
kita pergi ke file middlewarenya





































*/