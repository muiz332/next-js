import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { authRedirect } from "../../middlewares/authRedirect";
import Router from "next/router";

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSub = async (e) => {
        e.preventDefault()
        try{
            const {data: {msg,token}} = await axios.post('/api/auth/login',{email,password})
            Cookies.set('token',token)

            // ketika melakukan login kita redirect ke post
            Router.push('/post')
    
        }catch(err){
            console.log(err.message)
        }
        setEmail('')
        setPassword('')
    }

    return ( 
        <form onSubmit={handleSub}>
           <label htmlFor="email">email</label>
            <input type="text" placeholder="email" autoFocus required id="email" onChange={e => setEmail(e.target.value)} value={email}/><br />
          <label htmlFor="password">password</label>
            <input type="text" placeholder="email" autoFocus required id="password" onChange={e => setPassword(e.target.value)} value={password}/><br/>
            <button>Login</button>
        </form>
     );
}
 
export default Login;


/*

nah disini kita akan gunakan fitur redirect disisi server ya menggunakan getServerSideProps
kenapa redirectnya harus disisi server? kan bisa menggunakan redirect disisi client

yaitu menggunakan route.push() ?

nah ketika kita menggunakan router.push kita bisa mengecheck apakah diapunya token apa belum 
pada useEffect

sedangkan use effect itu akan dijalankan ketika halamannya sudah dirender pertama kali
jadi nanti hasilnya pasti halamannya akan tampil sebentar lalu akan langsung diredirect ke
halaman post

dan itu tidak kita inginkan dan juga tidak bagus
yang kita inginkan adalah halamannya langsung dirender sebelum UInya tampil

maka dari itu kita perlu menggunakan redirect disisi server dengan menggunakan getServerSidePorps
jadi ingat kalo kita ingin mengambahkan logic ketika componentnya belum dirender kita
bisa menggunakan getServerSideProps

jadi ketika halamannya direquest maka halaman ini akan dirender diserver

// */

// export async function getServerSideProps(context){

//     /*
//     nah kita bisa ambil cookienya dari request headernya
//     caranya kita tinggal tuliskan req.headers.cookie
    
//     */

//     // console.log(context.req.headers.cookie)
    
//     /*
    
//     nah kita sudah berhasil mengambil cookienya
//     kita bisa parsing manual agar mengubah semua cookienya menjadi object
//     atau kita bisa menggunakan library yaitu next-cookies untuk memparsing
//     semua cookienya

//     nah kita install dulu npm i next-cookies
//     kalo sudah kita bisa ambil cookienya dan jangan lupa import
    
//     */

//     const allCookies = cookies(context)
//     // console.log(allCookies)

//     /*
    
//     nah dia sudah mengembalikan object ya
//     tinggal kita check nanti kalo cookienya ada dengan key token
//     maka kita redirect dihalaman post
    
//     */

//     if(allCookies.token){

//         // context.res.writeHead(302,{
//         //     location : "/post"
//         // }).end()
//     }



//     return {props : {}}
// }

/*

nah kita juga butuh fungsi redirect ini untuk halaman register juga
alangkah baiknya kita bikin middleware redirect


*/


export async function getServerSideProps(context){

   authRedirect(context)

    return {props : {}}
}

/*

nah kalo kita jalankan ketika sudah login
dan kita mengakses halaman login maka akan secara otomatis

diredirect kehalaman post
nah kita lakukan itu untuk halamna register juga

oke jadi seperti itu cara kita menghandle redirect dihalaman login

jadi kalo kita sudah login lalu mengakses halaman login sebelum componentnya ditampilkan
maka kita gunakan getServerSideProps

oke mudah mudahan kalian paham

*/