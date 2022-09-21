import { unauthRedirect } from "../middlewares/authRedirect";
import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import Navbar from "../components/Navbar";

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

            const {data : {data}} = await axios.get('/api/post',{
                headers : {
                    "Authorization" : `Bearer ${token}`
                }
            })

            setDataPost(data)
        }
    }

    return ( 
        <section>
            <Navbar />
            <h1>ini adalah halaman post</h1><br/>
            <Link href={'/post/tambah'}><a>Tambah post</a></Link>

            {
                dataPost.map(dt => (
                    <ul key={dt.id}>
                        <li>judul : {dt.title}</li>
                        <li>isi : {dt.content}</li>
                        <li>
                            <button onClick={() => Router.push(`/post/${dt.id}`)}>ubah</button>
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

