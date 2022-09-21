export function middleware(req){

    /*
    
    nah didalam function ini kita buat membuat suatu logic 
    contoh yang paling sederhana coba kita console.log dulu
    supaya tahu nih middlewarenya jalan atau tidak
    
    
    */

    // console.log('middleware')

    /*
    
    maka dia akan muncul banyak kata middleware
    artinya middlewarenya sudah berhasil dihalankan

    tapi kenapa middlewarenya itu ada banyak?
    kan kita cuma nulisnya satu saja

    ini karena seperti tadi request yang diterima oleh servernya
    itu banyak juga termasuk request file js atau asset asset yang lainya

    dan perlu kalian ingat middleware itu tidak hanya dijalankan untuk
    merequest halaman saja akan tetapi file atau asset yang lain juga

    nah setiap request itu bisa kita ketahui pada middlewarenya 
    seperti urlnya dengan menambahkan parameter request 

    kalo kita lihat isinya

    */

    console.log(req.url)

    /*
    
    nah ada banyak tuh ya request yang dikirimkan oleh clientnya 

    http://localhost:3000/
    http://localhost:3000/_next/static/chunks/webpack.js?ts=1662905000419
    http://localhost:3000/_next/static/chunks/main.js?ts=1662905000419
    http://localhost:3000/_next/static/chunks/react-refresh.js?ts=1662905000419
    http://localhost:3000/_next/static/chunks/pages/_app.js?ts=1662905000419
    http://localhost:3000/_next/static/development/_buildManifest.js?ts=1662905000419
    http://localhost:3000/_next/static/chunks/pages/index.js?ts=1662905000419
    http://localhost:3000/_next/static/development/_ssgManifest.js?ts=1662905000419
    http://localhost:3000/_next/static/development/_devMiddlewareManifest.json

    ada initial request pada request pertamanya
    dan sisanya adalah asset dari halaman tersebut 

    nah jadi terlihat lebih masuk akal ya kenapa middlewarenya itu 
    dijalankan banyak 

    karena request yang diterima server itu banyak juga

    nah kita bisa mengatur middleware tersebut akan berjalan pada route tertentu
    misalnya ke dasboard saja 

    nah itu akan kita pelanjari dimateri selanjutnya

    oke jadi sampai disini dulu materi kali ini
    mudah mudahan kalian paham

    
    */

}