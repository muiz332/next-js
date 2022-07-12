import { useEffect } from "react";
import {useRouter} from 'next/router'

const NotFound = () => {
    const redirect = useRouter()

    useEffect(() => {
        setTimeout(() => {
            redirect.push('/')
        },2000)
    },[])


    return ( 
        <h1>maaf halaman tidak ditemukan</h1>
     );
}
 
export default NotFound;

/*

jadi misalkan ketika halamannya not found
maka setelah 2 detik saya akan pindahkan kehalaman beranda

kita bisa menggunakan use effect untuk menjalakan fungsi set time outnya
ketika pertama kali halamannya dirender maka jalankan set time outnya

setelah 2 detik maka jalankan auto redrirectnya 
.push(path) untuk menuju halaman yang diingikan

jadi seperti itu lah cara penggunaan dari auto redirect ini
mudah mudahan kalian paham



*/