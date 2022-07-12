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


/*

nah untuk membuat css modules kita bisa membuatnya dengan nambahkan kata module sebelum nama file kita
jadi kalian bisa tulis begini

namaCss.module.css 

jadi cukup seperti itu kita bisa menggunakanya

nah saat memanggilnya jika hanya memiliki satu kata misalkan 
navbarKu seperti itu kalian cukup panggil seperti ini 

style.navbarKU 

tetapi kalo kalian pisahkan dengan tanda baca kalian harus memanggilnya 
dengan menggunakan kurung kotak

style["navbar-ku"]

jadi seperti memanggil array ya

jadi sampai disini dulu materi kali ini 
kita akan lanjutkan dimateri berikutnya

mudah mudahan kalian paham

*/