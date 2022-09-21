// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mysql from '../../db/mysql'

// export default async function handler(req, res) {

//   /*
  
//   nah setelah kita melakukan send request 
//   maka kita tangkap datanya menggunakan req.body

//   nah data ini akan kita tambahkan kedalam database
//   tapi sebelum itu kita import dulu connection mysql

//   nah selanjutnya kita tinggal insert
//   dengna cara menuliskan seperti ini
  
//   */

//   await mysql('post').insert(req.body)

//   /*
  
//   dimana dia mengembalikan promise jadi harus kita async dan await
//   untuk menghidari error nantinya
  
//   */

//   res.status(200).json(req.body)
// }


/*

nah sekarang kita jalankan
kita send  request lagi

maka akan ada satu data didalam table post kita 
sesuai dengan yang kita kirimkan 

nah sekarang kita perbaiki sedikit codingan kita
kita gunakan try dan catch untuk menghandle keberhasilan 
dan kegagalanya pada async dan await

*/

export default async function handler(req,res){
  try{
    const hasil = await mysql('post').insert(req.body)
    res.status(201).json({msg : "data telah berhasil ditambahkan"})
    // res.status(201).json(hasil)

    // variable hasil itu adalah id dari data yang diinsertkan
  }catch(err){
    res.status(400).json({msg : err.message})
  }
}

/*

nah kalo misalkan databasenya ada yang error
kita bisa tampilkan errornya

201 itu created
dan 400 itu bad request, jadi ada kesalahan disisi client

kalo kita send request lagi maka datanya telah berhasil ditambahkan

oke jadi sampai disini materi kali ini 
kita sudah bisa menambahkan data kedalam database

kita lanjutkan dimateri yang lain mengenai get
jadi sampai disini materinya

mudah mudahan kalian paham

*/