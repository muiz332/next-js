import { useRouter } from "next/router";

const Detil = () => {
    const router = useRouter()
    const {id} = router.query
    return ( 
        <h1>ini adalah produk ke {id}</h1>
     );
}
 
export default Detil;

/*
kita buat filenya seperti itu
itu namanya tidak harus id nya bebas saja

jadi saya bikinnya didalam folder produk
supaya ketika diakses routenya seperti ini

/produk/:id

nah disini tinggal kita ambil parameternya menggunakan useRouter


*/