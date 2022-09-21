import Link from "next/link";
import Cookies from "js-cookie";
import Router from "next/router";

const Navbar = () => {

    const logout = () => {
        Cookies.remove('token')
        Router.replace('/auth/login')

        /*
        
        nah replace ini dia akan meredirect tapi melakukan refresh juga
        jadi tidak akan menyimpan history
        
        */
    }

    return ( 
        <ul>
            <li><Link href={'/'}><a>Beranda</a></Link></li>
            <li><Link href={'/post'}><a>post</a></Link></li>
            <li className="logout" onClick={logout} style={{cursor: "pointer"}}><a>logout</a></li>
        </ul>
     );
}
 
export default Navbar;

/*

disini kita tambhakan fungsi logout ya 

atau nanti kalian bisa bikin sendiri flownya seperti ini

ketika kita sudah melakukan login kita tampilkan menu logoutnya
dan ketika belum login kita tampilkan loginnya

tapi disini saya akan menambhakan fungsi logoutnya saja
nanti kalian bisa bikin sendiri

oke samapi disini materi kali ini
kita lanjut di materi berkutnya mengenai environment

mudah mudahan kalian paham

*/