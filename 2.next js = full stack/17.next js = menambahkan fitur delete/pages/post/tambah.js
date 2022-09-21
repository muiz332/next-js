import { useState } from "react";
import axios from 'axios'
import { unauthRedirect } from "../../middlewares/authRedirect";
import Router from "next/router";

const PostTambah = ({token}) => {
    const [judul,setJudul] = useState('')
    const [isi,setIsi] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const {data: {data}} = await axios.post('/api/post',{title : judul,content : isi},{
            headers : {
                "Authorization" : `Bearer ${token}`
            }
        })

        setJudul('')
        setIsi('')

        Router.push('/post')
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="judul">judul</label>
            <input type="text" id="judul" onChange={e => setJudul(e.target.value)} placeholder='judul'  value={judul}/><br />
            <textarea id="" cols="30" rows="10" placeholder="Isi" onChange={e => setIsi(e.target.value)} value={isi}></textarea>
            <button type="submit">Tambah</button>
        </form>
     );
}
 
export default PostTambah;


export async function getServerSideProps(context){
    const {token} = unauthRedirect(context)

    return {props : {token}}
}

