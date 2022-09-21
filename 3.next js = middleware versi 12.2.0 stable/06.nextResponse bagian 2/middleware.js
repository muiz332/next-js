/*

4. set cookie

kita akan mencoba menambakan cookies


*/

// import { NextResponse } from "next/server";


// export const middleware = (req) => {

//     const response = NextResponse.next()
//     response.cookies.set('token','12345')

//     console.log(response.cookies)


//     return response
// }


/*

nah jadi kita return responsenya ya untuk mengatur cookie pada bagian server
dan jangan lupa kita return responsenya agar kita dapat memanipulasi cookie pada client

nah diparameter ke 3 pada set kita bisa mengatur httOnly



*/

import { NextResponse } from "next/server";


export const middleware = (req) => {

    const response = NextResponse.next()
    response.cookies.set('token','12345',{
        httpOnly : true
    })

    console.log(response.cookies)


    return response
}

/*

kalo kita kasih httpOnly true tokennya ga bakal bisa diakses oleh javascript client
maka kalo kita check di document.cookie, cookienya tidak akan dapat kita akses

nah kalian juga bisa melakukan get,delete,clear pada cookie yang sudah 
kalian buat ya 


*/