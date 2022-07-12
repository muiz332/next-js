import Link from "next/link";

const Produk = () => {
    return ( 
        <main>
            <h1>produk</h1>
            <section>
                <h2>keyboard</h2>
                <Link href={"/produk/1"}><a>detil produk</a></Link>
            </section>
            <section>
                <h2>mouse</h2>
                <Link href={"/produk/2"}><a>detil produk</a></Link>
            </section>
        </main>
     );
}
 
export default Produk;


/*

kalo kita jalankan kita klik keyboard detil produk
maka routenya akan menjadi /produk/1

begitu pula dengan mouse

akan menjadi /produk/2


jadi seperti itu penggunaan dari dynamic route
mudah mudahan kalian paham

*/