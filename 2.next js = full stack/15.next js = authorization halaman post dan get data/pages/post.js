import { unauthRedirect } from "../middlewares/authRedirect";
import axios from "axios";

// const Post = () => {
//     return ( 
//         <h1>ini halaman post</h1>
//      );
// }
 
// export default Post;



export async function getServerSideProps(context){
    const allCookies = unauthRedirect(context)

    /*
    
    untuk mengetesnya kalian bisa logout
    jadi cukup hapus saja cookienya dibrowser maka nanti akan
    langsung diredirect kehalaman login

    dan setelah itu kita akan membuat getAPI untuk datanya
    
    */

    const {data: {data}} = await axios.get('http://localhost:3000/api/post',{
        headers : {
            "Authorization" : `Bearer ${allCookies.token}`
        }
    })

    /*
    
    nah kita langsung saja get data ke apinya menggunakan axios dan jangan
    lupa kirimkan tokennya pada bagian headernya

    nah perlu kalian ketahui pada saat kalian menjalankan data fetching diserver maka 
    kalian harus menuliskan protocol dan domain namenya 
    kalo kalian tuliskan routenya saja

    seperti pada halaman login itu akan error karena tidak support diserver
    jadi diserver kita harus menuliskan url abosolute

    kalo kita jalankan kita sudah berhasil melakukan data fetching diserver
    tinggal kita kirimkan saja datanya keUInya dengan cara kita mengirimkan pada 
    propsnya
    
    */



    return {props : {data}}
}


const Post = ({data}) => {
    return ( 
        <section>
            <h1>ini adalah halaman post</h1><br/>

            {
                data.map(dt => (
                    <ul key={dt.id}>
                        <li>judul : {dt.title}</li>
                        <li>isi : {dt.content}</li>
                    </ul>
                ))
            }
        </section>
     );
}
 
export default Post;

/*

nah kalo kita jalankan maka akan berhasil menampilkan datanya ya 
oke jadi seperti itu bagaimana caranya kita menambahkan authorization pada halaman
post kita

dan kita juga berhasil melakukan get data pada halaman post
dimateri berikutnya kita akan membuat halaman create post ya 
kita akan menambahkan data

jadi sampai disini dulu materi kali ini mudah mudahan
kalian paham


*/