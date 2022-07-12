
const Detil = ({hasil}) => {
    return ( 
        <ul>
            <li>nama : {hasil.name}</li>
            <li>email : {hasil.email}</li>
            <li>phone : {hasil.phone}</li>
            <li>website : {hasil.website}</li>
        </ul>
     );
}
 
export default Detil;

/*

nah misalkan mahasiswanya kika diklik diredirect helaman ini
harusny apakai component link

akan tetapi ini hanya sekedar contoh saya kasih useRoute untuk
diredirect kehalaman ini ketika diklik

nah disini kita akan mengambil semua datanya
data entitas atau object yang diklik

Jika halaman memiliki Rute Dinamis dan menggunakan getStaticProps, halaman tersebut perlu menentukan daftar jalur yang akan dihasilkan secara statis pada saati kita build

getStaticPaths harus digunakan dengan getStaticProps. Anda tidak dapat menggunakannya dengan getServerSideProps

nah sekarang kita buat getStaticPathnya dulu



*/

export async function getStaticPaths(context){

    /*
    
    nah getStaticPath ini mengembalikan object Paths
    nah pathsnya itu akan kita buat

    pathsnya ini adalah list dari user user yang kita miliki tadi 
    sehingga fungsi dari getStaticPath ini akan membuat halaman
    halaman static html sejumlah user yang kita miliki

    jdai fungsinya hanya membuat halaman halaman detil user sebanyak 
    user atau data mahasiswa yang kita miliki dihalaman produk

    jadi untuk mendapatkannya kita tinggal get saja dari APInya tadi
    
    */

    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const hasil = await data.json()

    // nah kemudian kita akan mengambil list idnya saja 

    const dataID = hasil.map(mhs => (
        {
            params : {
                id : mhs.id.toString()
            }
        }
    ))

    // nah setelah itu tinggal kita return

    return {
        paths : dataID,
        fallback : false
    }
}


/*

nah sekarang ketika dibuild next jsnya sudah tahu akan membuat berapa 
halaman static dihtmlnya berdasarkan data yang difetchingnya

nah sekarang tinggal kita ambil data detilnya mau ditampilkan data apa
saja menggunakan getStaticProps


*/

export async function getStaticProps(context){
    /*
    
    nah disini tinggal kita ambil data detilnya 
    kita butuh parameter para routenya atau urlnya 

    caranya kita ambil melakui parameter context pada getStaticProps
    
    */

    // lalu kita fetching datanya

    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const hasil = await data.json()

    // tinggal kita return dan ambil datanya dicomponentnya sebagai props

    return {
        props : {hasil}
    }


}


/*

nah sekarang coba kita jalanakan
maka akan tampil detil datanya dari page produk

jadi itulah cara penggunakan dari getStaticPaths dan getStaticProps

getStaticPaths digunakan untuk menentukan berapa halamannya
kita cukup ambil idnya saja

nah getStaticProps digunakan untuk mengambil datanya secara spesifik

jadi itulah cara menggunakan getStaticPaths

kita coba build

nah kalo kalian lihat pada next/server/pages/produk

maka akan ada html sebanyak 10 kali karena data kita sebanyak 10
jadi karena ini static next js akan membuat seperti itu 

nah tergantung menuju kemana kali diklik
maka akan diarahkan kehalaman detil yang sama dengan yang diklik

jadi seperti itu 
mudah mudahan kalian paham

*/  