import Link from "next/link";
import style from './navbar.module.css'

const Navbar = () => {
    return ( 
        <nav className={style["navbar-ku"]}>
        <ul>
            <li><Link href={"/"}><a>Beranda</a></Link></li>
            <li><Link href={"/tentang"}><a>tentang</a></Link></li>
        </ul>
    </nav>
     );
}
 
export default Navbar;

