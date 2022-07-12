import Link from "next/link";
import { useRouter } from "next/router";


const Produk = ({dataMahasiswa}) => {
    const redirect = useRouter()
    return ( 
        <main>
            <h1>produk</h1>
            <section>
                <h2>keyboard</h2>
                <Link href={"/produk/1"}><a>detil produk</a></Link>
            </section>
            <section>
                <h2>mouse</h2>
                <Link href={"/produk/2"}><a>detil produk</a></Link>
            </section>
            <section>
                <h2>data mahasiswa</h2>
                {
                    dataMahasiswa.map(mhs => {
                        return (
                            <ul key={mhs.id} onClick={() => redirect.push(`/produk/${mhs.id}`)} style={{cursor : "pointer"}}>
                                <li>nama : {mhs.name}</li>
                                <li>email : {mhs.email}</li>
                                <li>no hp : {mhs.phone}</li>
                            </ul>
                        )
                    })
                }
            </section>
        </main>
     );
}
 
export default Produk;


export async function getStaticProps(context){
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const hasil = await data.json()


    return {
        props : {
            dataMahasiswa : hasil
        }
    }


}

