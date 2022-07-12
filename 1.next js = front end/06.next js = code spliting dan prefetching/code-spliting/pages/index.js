import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
        <ul>
          <li><Link href={"/"}><a>Beranda</a></Link></li>
          <li><Link href={"/tentang"}><a>tentang</a></Link></li>
        </ul>
      </header>
      <h1>halaman utama</h1>
    </div>
  )
}
