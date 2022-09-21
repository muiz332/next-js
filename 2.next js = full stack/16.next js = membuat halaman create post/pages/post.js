import { unauthRedirect } from "../middlewares/authRedirect";
import axios from "axios";
import Link from "next/link";



export async function getServerSideProps(context){
    const allCookies = unauthRedirect(context)

    const {data: {data}} = await axios.get('http://localhost:3000/api/post',{
        headers : {
            "Authorization" : `Bearer ${allCookies.token}`
        }
    })


    return {props : {data}}
}


const Post = ({data}) => {
    return ( 
        <section>
            <h1>ini adalah halaman post</h1><br/>
            <Link href={'/post/tambah'}><a>Tambah post</a></Link>

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