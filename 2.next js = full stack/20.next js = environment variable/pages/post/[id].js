import { useState } from "react";
import axios from 'axios'
import { unauthRedirect } from "../../middlewares/authRedirect";
import Router from "next/router";

const PostUbah = ({data,token}) => {
    const [judul,setJudul] = useState(data.title)
    const [isi,setIsi] = useState(data.content)

    const handleSubmit = async (id,e) => {
        e.preventDefault()

        const {data} = await axios.put(`/api/post/${id}`,{title : judul,content : isi},{
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        })

        setJudul('')
        setIsi('')

        Router.push('/post')

    }


    return ( 
        <form onSubmit={e => handleSubmit(data.id,e)}>
            <label htmlFor="judul">judul</label>
            <input type="text" id="judul" onChange={e => setJudul(e.target.value)} placeholder='judul'  defaultValue={judul}/><br />
            <textarea id="" cols="30" rows="10" placeholder="Isi" onChange={e => setIsi(e.target.value)} defaultValue={isi}></textarea>
            <button type="submit">Ubah</button>
        </form>
     );
}
 
export default PostUbah;


export async function getServerSideProps(context){
    const {token} = unauthRedirect(context)

    const {data} = await axios.get(`http://localhost:3000/api/post/${context.query.id}`,{
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    })
    return {props : {data,token}}
}


/*

nah jadi kita get single datanya dibagian getServerside propsnya
lalu data itu kita kirimkan pada compoentnya untuk nanti diedit

oke jadi seperti itu cara pembuatan dari edit ini mudah mudahan
kalian paham

*/