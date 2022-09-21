import cookies from "next-cookies";

export const authRedirect = (context) => {
    const allCookies = cookies(context)

    if(allCookies.token){
        context.res.writeHead(302,{
            location : "/post"
        }).end()
    }

}
