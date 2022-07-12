import Navbar from "../nav";
import Footer from "../footer";



const Layout = ({children}) => {
    return <> 
        <Navbar />
        {children}
        <Footer />
    </>
}
 
export default Layout;

/*

nah kita buat component seperti itu 
yang didalamnya kita ambil navbar dan footernya

lalu untuk parameternya kita berikan nama children tidak boleh asal namanya
nah nanti kita bisa kasih keparameernya itu dengan cara kita mengirimkan

component yang berbeda ditiap tiap halaman
nah component layout ini akan kita panggil kefile _app.js

kita pergi kefile itu

*/