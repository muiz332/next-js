import Head from "next/head";

const Tentang = ({dataPost}) => {
    return <>
      <Head>
    <title>tentang</title>
    <meta name='description' content='halaman tentang' />
    <link rel="icon" href="/favico.ico" />

  </Head>
  <main>
    <h1>ini adalah halaman tentang</h1>
    {
      dataPost.map(dt => {
        return (
          <ul key={dt.id}>
            <li>judul: {dt.title}</li>
            <li>isi: {dt.body}</li>
          </ul>
        )
      })
    }
  </main>
    </>
}
 
export default Tentang;


/*

nah untuk penggunaanya sama dengan getStaticProps
yaitu kita cukup export function dengan nama getServerSideProps



*/

export async function getServerSideProps(context){
  // nah disini tinggal kita fetching datanya

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const dataPost = await res.json()

  // dan kita return object yang didalamnya ada properti props

  return {
    props : {
      dataPost
    }
  }

}

/*

tinggal kita gunakan datanya pada component sebagai props
kalo sudah kalian tampilkan datanya

kita coba build 

nah kalo kalian lihat pada next/server/pages/tentang.js

maka dia masih tetap berupa file javascript
karena dia dinamis datanya 

berbeda dengan halaman produk yang sudah dibuatkan halaman htmlnya
dan datanya static

dan getServerSideProps akan dibuatkan static htmlnya 
ketika diakses oleh user

untuk getServerSideProps ini akan sangat cocok untuk
API yang bersifat dinamis karena akan ada postingan baru misalnya 

maka yang cocok adalah getServerSideProps

jadi seperti itu penggunaan dari getServerSideProps
mudah mudahan kalian paham

*/