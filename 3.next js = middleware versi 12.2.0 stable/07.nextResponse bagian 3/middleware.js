/*

5.set headers

nah secara default itu akan membarikan response headersnya
content typenya itu text/html

makanya browser akan membaca dulu conten typenya apa 
jadi kalo misalkan content typenya itu text/html dia dia akan dirender

kalo misalkan content typenya aplication/json dia tidak dirender 
jadi setiap request itu ada content typenya supaya si browser tau
content apa yang sedang kita berikan 

dan si server harus tau content apa yang sedang dikirim
nah kita bisa mengatur headersnya pada content typenya

jadi kalo misalkan kalian punya web app yang digunakan untuk
menampilkan halaman pdf misalnya

jadi kalian bisa mengatur content typenya disini
agar si browser tau bahwa content yang kita berikan dari server
itu adalah pdf

jadi kalo kalian iseng iseng mengubah content type 
yang tidak sesuai dengan responsenya itu akan bermasalah 

misalkan 

*/

// import { NextResponse } from "next/server";


// export const middleware = (req) => {

//     const response = NextResponse.next()
//     response.headers.set('Content-Type','image/png')

//     return response
// }

/*

kalo kita jalankan maka akan tampil gambar kotak kecil 
jadi si browser itu bisa menghandle response yang diberikan 
itu berdasarkan content typenya 

kalo kalian penasaran content type apa saja yang ada 
itu kalian bisa bisa lihat disini

https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

jadi isi dari headers ini bukan cuma content type saja ya
masih banyak yang lain dan ini hanya sebagai contoh saja bahwa

kita bisa mengatur headersnya didalam middleware


oke jadi itu saja ya materi kali ini 
ini adalah materi terakhir dari middleware yang stable pada next js

oke jadi itu saja mudah mudahan kalian paham



*/