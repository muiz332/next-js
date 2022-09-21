// export const middleware = (req) => {

//     if(req.nextUrl.pathname === '/dashboard'){
//         console.log('ini halaman dashboard')
//     }

// }


/*

nah kalo kita akses halaman /dashboard/produk maka middleware
ini halaman dashboard tidak akan dieksekusi 

agar bisa dieksekusi pada parent route yang sama 
kita bisa lakukan sepert ini 

*/

export const middleware = (req) => {

    if(req.nextUrl.pathname.startsWith('/dashboard')){
        console.log('ini halaman dashboard')
    }

}

/*

kalo kita jalankan pada halaman /dashboard maka akan jalan ya
dan kalo kita jalankan pada halaman produk yang memiliki parent
/dashboard atau urlnya itu yang diawali dengan /dashboard

maka middleware tersebut akan dieksekusi
kalo kita akses /dashboard/produk maka middlewarenya akan jalan 

meskipun kalo childnya itu ga ada middleware akan tetap dijalankan
karena parent urlnya sama

oke jadi seperti itu ya bagaimana cara kita menjalankan middleware
pada parent url yang sama

mudah mudahan kalian paham


*/