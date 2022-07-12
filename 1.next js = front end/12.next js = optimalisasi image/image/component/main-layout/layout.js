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

