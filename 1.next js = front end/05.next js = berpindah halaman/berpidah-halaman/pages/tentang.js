import Link from "next/dist/client/link";

const Tentang = () => {
    return <>
            <header>
                <h1>menu</h1>
                <nav>
                    <ul>
                        <li><Link href={"/"}><a>beranda</a></Link></li>
                        <li><a href="/tentang">tentang</a></li>
                    </ul>
                </nav>
            </header>
            <h1>ini adalah halaman tentang</h1>
    </>
}
export default Tentang;