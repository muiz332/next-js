import Navbar from "../component/nav";
import styles from '../styles/Home.module.css'

const Tentang = () => {
    return (
        <div className={styles.container}>
            <header>
                <h1 className="title">menu</h1>
            <Navbar />
            </header>
            <h1>ini adalah halaman tentang</h1>
            <button className={styles.tombol}>tombol</button>
        </div>
    )
}
 
export default Tentang;


/* 


nah disini kita tinggal tambahkan classnya apa
lalu didalam file global.css kita bisa kasih stylenya disitu

sekarang kita coba yang menggunakan modules
saya sudah membuat style dengan nama tombol

untuk cara panggilnya tinggal kita import saja disini
lalu tambahkan diclassNamenya itu styles.nama classnya

atau sekarang kita coba buat css modules pada setiap componentnya
misalkan saya pakai compoenent navbar untuk kasus kali ini 

*/
