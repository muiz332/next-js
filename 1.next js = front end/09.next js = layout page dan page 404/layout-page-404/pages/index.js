import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1>ini adalah halaman beranda</h1>
      </main>
    </div>
  )
}


/*

nah disini cukup kalian tuliskan component yang diperlukan dihalaman berdana
dan tidak perlu mengambil navbar dan footernya

karena sudah dihandle oleh component layout
begitu pula dengan halaman tentang

nah sekarang untuk menghandle halaman 404
kita bisa buat file dengan nama 404.js

nah nanti itu akan menjadi page kita ketika halamannya
tidak ada

*/