import Navbar from "../component/nav";

const Tentang = () => {
    return <>

        <header>
            <h1>menu</h1>
           <Navbar />
        </header>
        <h1>ini adalah halaman tentang</h1>
    </>
}
 
export default Tentang;


/*

kita tinggal panggil saja componentnya pada halaman yang diperlukan
jadi kita tidak boleh membuat component pada folder pages ya 

karena itu akan dianggap sebagai routing baru
jadi seperti itu cara membuat component didalam
next js

mudah mudahan kalian paham


*/