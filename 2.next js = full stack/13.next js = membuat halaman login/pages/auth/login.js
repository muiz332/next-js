import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSub = async (e) => {
        e.preventDefault()
        try{
            const {data: {msg,token}} = await axios.post('/api/auth/login',{email,password})
            console.log(token)

            /*
            
            nah setelah kita mendapatkan token kita bisa simpan token tersebut dicookie
            lalu kenapa dicookie, bukan di local storage atau disession

            karena dicookie itu kita bisa mengatur kadaluarsa dari token tersebut
            jika kita simpan dilocal storage maka itu akan disimpan selamanya, selama token tersebut tidak dihapus dari local storage

            sedangkan disession token itu hanya disimpan ketika membukan browsernya
            dan ketika browsernya diclose maka token tersebut akan dihapus

            nah atau yang lebih aman itu bisa diset cookie pada server
            jadi tinggal mainan cookie diservernya sama 

            tapi itu lebih advendce

            kita belajar yang fundamentalnya dulu agar kalian tahu dulu flownya seperti apa
            nanti kalian bisa coba coba sendiri membuat cookie diserver

            kalian bisa baca disini untuk cookie server
            https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

            nah perlu kalian ketehui untuk memanipulasi cookie pada browser itu
            kalian bisa menggunakan web API

            dengan menuliskan document.cookie
            dan nanti akan tampil cookienya

            kalian bisa baca disini
            https://www.w3schools.com/js/js_cookies.asp

            akan tetapi kalo kalian lihat pada pengaturan waktu expirednya 
            itu agak panjang dan juga 

            dan juga masih manual untuk mengecheck,mengambil,dan mengatur cookienya
            kalian bisa baca pada link diatas

            nah kita bisa pakai library dari npm untuk menghandle masalah tersebut
            yaitu js cookie https://www.npmjs.com/package/js-cookie

            npm i js-cookie

            untuk menggunaannya sangat mudah sekali,kalian bisa
            baca documentasinya, kalo yang ada pathnya itu
            maksutnya cookie bakal valid diroute mana saja

            setelah kalian install kalian import dulu
            nah sekarang tinggal kita atur cookienya

            */

            Cookies.set('token',token)
            
            /*
            
            nah sekarang ktia coba untuk loggin
            setelah login kalian check cookienya pada document.cookie

            maka akan mengembalikan hasil seperti ini
            '_ga=GA1.1.1329797026.1647508229; token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoibWluYXRvMzVAZ21haWwuY29tIiwiaWF0IjoxNjYwNzg1MzAwLCJleHAiOjE2NjEzOTAxMDB9.Soj38SRf_cKE8FCQLoC2hHQYZxLddAygZz7tJ22fsrg'

            sudah ada tokenya ya dari key dan value peer yang kita set tadi

            nah setelah kalian set cookienya kita redirect ke halaman postnya
            untuk itu dimateri selanjutnya kita akan membuat halaman postnya
            
            
            
            */
    
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