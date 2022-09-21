// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


/*

nah disinilah kita bisa membuat webservice nya
jadi kalo kalian sudah belajar express ini mirip dengan express

dimana pada callbacknya itu ada function yang menerima parameter
request dan response 

dan method method yang ada ini mirip dengan express ya
jadi kalian bisa lihat disitu method methodnya

contohnya kita coba tangkap querynya 
kalo misalkan kita tulis begini

http://localhost:3000/api/hello?nama=muiz&alamat=wringinpitu

maka kita bisa tangkap pada parameter reqnya dengan cara
req.query

dimana dia mengembalikan sebuah object
kalian juga dapat mengatur status codenya


*/

// export default function handler(req, res) {
//   res.status(200).json({
//     req : req.query
//   })
// }

/*

nah untuk mengujinya kalian bisa pakek browser atau kalian 
menggunakan extention rest client kalian install dulu

dan kalian bisa file dengan .rest
lalu kalian send request maka akan tampil hasilnya

atau kalian juga bisa menangkap methodnya


*/


export default function handler(req, res) {
  res.status(200).json({
    method : req.method,
    params : req.params
  })
}


/*

atau nanti kita juga bisa baca cookienya 
nah kita juga bisa mengambil req.body

untuk mengambil data pada method post
dari form yang kita kirimkan untuk diinsert kedalam database

jadi kita bisa mengecheck secara manual 
jika methodnya apa kita proess apa

perlu kalian ingat json itu berbentuk string
jadi sebenarnya method json()

itu mengubah object pada javascript menjadi string json
dengan cara JSON.stringify(object)

untuk mengubah json menjadi object kita bisa menggunakan
JSON.parse(json)


nah dimateri ini nanti kita akan membuat aplikasi CRUD
menggunakan database mysql ya

jadi seperti itu cara membuat API pada next js
mudah mudahan kalian paham

















*/