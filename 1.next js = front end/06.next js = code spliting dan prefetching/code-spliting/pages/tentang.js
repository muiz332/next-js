import Link from "next/link";

const Tentang = () => {
    return <>
        <header>
        <ul>
          <li><Link href={"/"}><a>Beranda</a></Link></li>
          <li><Link href={"/tentang"}><a>tentang</a></Link></li>
        </ul>
      </header>
      <h1>ini adalah halaman tentang</h1>
      </>  
}
 
export default Tentang;