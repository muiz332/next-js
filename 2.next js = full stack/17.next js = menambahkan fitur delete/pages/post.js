import { unauthRedirect } from "../middlewares/authRedirect";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

const Post = ({data,token}) => {
    const [dataPost,setDataPost] = useState(data)

    const handleDelete = async (id) => {
        const check = confirm('yakin mau dihapus?')

        if(check){
            await axios.delete(`/api/post/${id}`,{
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            })

            // kalian bisa menggunakan filter ya

            // const data = dataPost.filter(dt => dt.id !== id && dt)

            const {data : {data}} = await axios.get('/api/post',{
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            })

            setDataPost(data)

            /*
            
            tapi sebaiknya kalian request saja datanya ke API
            karena ketika kita menggunakan filter ketika datanya ada banyak

            dan filter itu akan mencari datanya satu persatu 
            maka akan lambat juga aplikasi kita
            
            */
        }
    }

    return ( 
        <section>
            <h1>ini adalah halaman post</h1><br/>
            <Link href={'/post/tambah'}><a>Tambah post</a></Link>

            {
                dataPost.map(dt => (
                    <ul key={dt.id}>
                        <li>judul : {dt.title}</li>
                        <li>isi : {dt.content}</li>
                        <li>
                            <button>ubah</button>
                            <button onClick={() => handleDelete(dt.id)}>hapus</button>
                        </li>
                    </ul>
                ))
            }
        </section>
     );
}
 
export default Post;

export async function getServerSideProps(context){
    const allCookies = unauthRedirect(context)

    const {data: {data}} = await axios.get('http://localhost:3000/api/post',{
        headers : {
            "Authorization" : `Bearer ${allCookies.token}`
        }
    })


    return {props : {data,token: allCookies.token}}
}

/*

jadi kita kirimkan tokennya juga ya 
kita buat juga use state untuk mengisinya dengan data

dimana nanti statenya akan diubah setelah melakukan delete
jadi nanti secara otomatis datanya akan dirender ulang


jadi seperti itu ya fitur sederhana untuk menghapus data
mudah mudahan kalian paham


*/