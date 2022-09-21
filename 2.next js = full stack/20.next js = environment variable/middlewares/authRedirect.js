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
