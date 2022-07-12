import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header>
            <h1>menu</h1>
            <Navbar />
        </header>
        <h1>ini adalah halaman beranda</h1>
    </div>
  )
}
