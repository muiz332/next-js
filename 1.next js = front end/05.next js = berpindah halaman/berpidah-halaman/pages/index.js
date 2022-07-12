import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <h1>menu</h1>
        <nav>
          <ul>
            <li><Link href={"/"}><a>beranda</a></Link></li>
            <li><a href="/tentang">tentang</a></li>
          </ul>
        </nav>
      </header>
     <h1>ini adalah halaman utama</h1>
    </div>
  )
}


/*

nah ketika kita berpindah kehalaman beranda saat berada dihalaman tentang
maka browser tidak akan melakukan relod lagi

sedangkan ketika kita berada dihalaman beranda dan kita ingin berpindah kehalaman 
tentang maka si browser akan melakukan reloq lagi

ketika kita menggunakan component Link itu sama seperti direact saat menggunakan 
react router Dom

yang dirender itu DOMnya jadi kita tidak perlu mengirimkan request lagi
sedangkan kalo kita menggunakan tag a itu akan relod lagi

karena browser akan mengirimkan request lagi keserver kehalaman
yang berbeda

untuk navigasi kalian bisa menggunakan component Link
karena itu akan lebih cepat

jadi seperti itu cara berpindah halaman dengan 
menggunakan component link didalam next js 

mudah mudahan kalian paham

*/