// 1.nextResponse.next()

// import { NextResponse } from "next/server";


// export const middleware = (req) => {

//     if(req.nextUrl.pathname.startsWith('/dashboard')){
//         console.log('ini dashboard')
//     }

//     return NextResponse.next()
// }

/*

nah kalo kita jalankan maka tidak ada yang berubah
kalo kita menuliskan logic lebih baik kita pakai nextResponse.next()

agar kita bisa lebih mudah untuk membacanya 
bahwa kalo tidak ada middleware yang dijalankan maka
middleware akan mengembalikan response yang sewajarnya

yaitu dengan menjalankan component selanjutnya



*/




/*
2.redirect

nah misalkan kasusnya ketika token dari authentication login itu belum dibuat
kita bisa alihkan kehalaman login 

nah untuk melakukan redirect kita bisa tulis seperti ini

*/

// import { NextResponse } from "next/server";


// export const middleware = (req) => {

//     if(req.nextUrl.pathname.startsWith('/dashboard')){
//         return NextResponse.redirect(new URL('/admin',req.url))
//     }

//     return NextResponse.next()
// }


/*

nah jadi ketika parent urlnya itu /dashboard maka kita akan alihkan
kehalaman admin misalkan 

tapi kalo kita jalankan maka akan muncul tulisan error
katanya url nya harus bersifat absolute

jadi harus full url gitu

jadi kita bisa pakai new url ya 

new URL('/admin',req.url)

jadi kita buat url yang baru menggunakan new url 
dan sekarang kalo kita jalankan dan kita akses halaman dashboard
maka akan diredirect kehalaman admin




3.rewrite

nah kita akan mencoba melakukan rewrite 
jadi rewrite ini adalah mengganti response dengan response yang baru 

langsung saja kita coba


*/


import { NextResponse } from "next/server";


export const middleware = (req) => {

    if(req.nextUrl.pathname.startsWith('/dashboard')){
        return NextResponse.rewrite(new URL('/admin',req.url))
    }

    return NextResponse.next()
}

/*

jadi rewrite ini adalah memanipulasi response dengan halaman yang lain
jadi halaman tersebut harus ada ya 


oke kita lanjutkan dimateri selanjutnya


*/