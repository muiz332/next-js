import Link from "next/link";

const Produk = ({dataMahasiswa}) => {
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
                            <ul key={mhs.id}>
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


/*

yang pertama jika kalian mengexport function yang bernama
getStaticProps (pembuatan situs static) dari sebuah halaman 

maka next js akan melakukan pre render halaman tersebut pada waktu
next js build dan akan menggunakan props untuk menangkap nilainya

langsung saja kita coba

*/

export async function getStaticProps(context){
    /*
    
    didalam parameter context ini kita dapat mengakses parameter yang
    dikirimkan pada routenya

    tetapi disini tidak kita gunakan
    
    */

    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const hasil = await data.json()


    return {
        // props ini akan diteruskan kecomponent halaman sebagai props



        props : {
            dataMahasiswa : hasil
        }
    }


}

/*

jadi kita bisa melakukan fetching data menggunakan getStaticProps
jika kalian lihat diinspect proses pemanggilan APInya itu berjalan disisi server

sehingga tidak kelihaatan pada browsernya
jadi sebelum javascriptnya itu muncul didalam browser 
dia sudah memanggil APInya dulu kemudian diambil datanya untuk ditampilkan

ketika kita menggunakan getStaticProps itu halaman ini sudah dibundel terlebih 
dahulu sebelum halamannya muncul

kalo misalakn kita build website ini 
kita coba jalankan npm build tapi matikan dulu servernya


setelah selesai kalian lihat
didalam next/server/pages/produk.html

nah didalamnya itu sudah ada datanya, data hasil pemanggilan APInya
sehingga pada saat ditampilkan datanya sudah ada

maka dari itu fungsi dari getStaticProps adalah 
dia sudah memiliki data sesuai dengan API yang kita get

kelemahannya adalah ketika datanya bersifat dinamis maka 
getStaticProps ini tidak cocok

karena ketika ada perubahan harus dibuild ulang 
jadi getStaticProps ini sangat cocok ketika datanya 
tidak dinamis

jadi ketika kita membangun website yang sifatnya static
menggunakan next js dan kita diharuskan melakukan pemanggilan API

maka kita wajing menggunakan getStaticProps
jadi itu fungsi dari getStaticProps pada data fetching

mudah mudahan kalian paham


*/