import Link from "next/link";

const Navbar = () => {
    return ( 
        <nav>
        <ul>
            <li><Link href={"/"}><a>Beranda</a></Link></li>
            <li><Link href={"/tentang"}><a>tentang</a></Link></li>
        </ul>
    </nav>
     );
}
 
export default Navbar;