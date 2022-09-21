// const middleware = (req) => {
//     console.log(req.url)
// }
 
// export default middleware;


/*

nah kita coba batasi middleware ini agar bisa berjalan dihalaman dashboard 
saja

kita menggunakan custome config untuk mengatur middleware ini 
mau berjalan diroute mana saja


*/

// export const config = {
//     matcher : '/dashboard'
// }

/*

jadi kalo kita tulis begini maka middleware ini akan berjalan dihalaman dashboard
saja kita coba jalankan dihalaman index maka dia tidak jalan

nah bagaimana kalo kita menjalankan middleware ini kedalam multiple page
artinya lebih dari satu halaman

nah misalnya kita buat halaman baru namanya admin.js
kalo kita akses halaman admin tidak dieksekusi juga

karena middleware ini akan dieksekusi hanya dihalaman dashboard
bagaimana middleware ini bisa berjalan dihalaman dashboard dan admin?

value pada matchernya kita ganti menjadi array

*/

// export const config = {
//     matcher : ['/dashboard','/admin']
// }

/*

kalian bisa lihat urutan middleware dieksekui pada documentasinya 

https://nextjs.org/docs/advanced-features/middleware


pada bagian Matching Paths
kalian bisa lihat urutan ke berapa middleware ini dieksekusi


yang pertama next js itu akan membaca headers dari next.config.js
pada file tersebut kita bisa menuliskan headersnya

yang kedua next js akan membaca redirect juga dari next.config.js 

baru setelah itu next js akan menjalankan middlewarenya

nah jadi itu lah bagaimana kita membatasi middleware dan
bagaimana middleware berjalan


nah sebenarnya ada 2 cara bagaimana kita mambatasi middleware
kita agar dapat berjalan hanya diroute tertentu saja

1.custome matcher
    yang pertama ada custome matcher nah ini cara yang udah kita lakukan ya
2.conditional statement
    yang akedua ada conditional statement
    nah jadi kita mengecheck pathname nya 

nah sebelum itu next js middleware ini punya url dan juga next url

bedanya kalo url itu string kalo next url itu object


*/

// export const middleware = (req) => {
//     console.log(req.nextUrl)
// }

 
// export const config = {
//     matcher : ['/dashboard','/admin']
// }

/*

kalo kita lihat nextUrl itu akan mengembalikan sebuah object seperti ini
{
  href: 'http://localhost:3000/admin',
  origin: 'http://localhost:3000',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'localhost:3000',
  hostname: 'localhost',
  port: '3000',
  pathname: '/admin',
  search: '',
  searchParams: URLSearchParams {  },
  hash: ''
}

nah kemungkinan next js itu menggunakan 
new URL pada js

kalo kalian coba jalankan dibrowser 
new URL(urlnya)

maka akan sama seperti punyanya next js yaitu next url pada
middlewrenya

nah next url itu versi lebih lengkapnya dari url atau request yang datang
untuk itu tinggal kita check aja pathnamenya

kita coba


*/

export const middleware = (req) => {
    if(req.nextUrl.pathname === '/dashboard'){
        console.log('ini middleware dashboard')
    }else if(req.nextUrl.pathname === '/admin'){
        console.log('ini middleware admin')
    }

}

/*

nah jadi kalo kita jalankan dia hanya akan dijalankan pada router
tertentu yang telah kita definisikan 

walupun ini sebetulnya middlewarenya berjalan disemua route

oke jadi seperti itu cara kita membatasi middlewre kita ya

dimateri selanjutnya kita akan membahas bagaimana caranya agar middleware
kita tetap berjalan diparent route yang sama

misalnya ketika kita punya route seperti ini

/dashboard

tapi kita juga ingin menjalankan middleware tersebut pada route

/dashboard/user

nah kalo sekarang tidak bisa berjalan pada sub route
dimater selanjutnya kita akan bahas bagaimana si middleware ini bisa berjalan 
disub route

mudah mudahan kalian paham



*/
