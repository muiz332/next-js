import cookies from "next-cookies";

export const authRedirect = (context) => {
    const allCookies = cookies(context)

    if(allCookies.token){
       return context.res.writeHead(302,{
            location : "/post"
        }).end()
    }

}

export const unauthRedirect = (context) => {
    const allCookies = cookies(context)

    if(!allCookies.token){
        context.res.writeHead(302,{
            location : "/auth/login"
        }).end()
    }

    return allCookies

}

/*

jadi ketika tidak punya token maka kita redirect kehalaman login
nanti disitu kita bisa login

dan kita kembalikan si tokennya karena ketika kita melakukan get API
kan kita butuh tokennya maka dari itu kita return tokennya 

dan kita bisa melakukan getAPI menggunakan token tersebut

*/