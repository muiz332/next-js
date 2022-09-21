// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mysql from '../../db/mysql'
import jwt from 'jsonwebtoken'

export default async function handler(req,res){

  if(req.method === 'POST'){
    try{
      const hasil = await mysql('post').insert(req.body)
      res.status(201).json({msg : "data telah berhasil ditambahkan"})
    }catch(err){
      res.status(404).json({msg : err.message})
    }
  }else if(req.method === "GET"){

    
  /*
  
  nah untuk mendapat headersnya kita bisa tulis 
  req.headers
  
  */


    // kita pergi ke testing apinya 
    /*
    
    nah kalo kita lihat kita sudah mendapatkan headers seperti ini

    {
    'user-agent': 'vscode-restclient',
    authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJtdWl6QGdtYWlsLmNvbSIsImlhdCI6MTY2MDQ3NjI3NiwiZXhwIjoxNjYxMDgxMDc2fQ.gzYniT_5wpopL-dzU3Y9Akd7JEk-X-TW5Jp4VeYix8o',

    'accept-encoding': 'gzip, deflate',
    host: 'localhost:3000',
    connection: 'close'
  }

  nah kita sudah mendapatkan jenis token dan tokennya 
  tinggal kita check nih kalo si user tidak mengirimkan token 
  alias tkey authorization itu nilainya undefined maka 
  kasih response 401 yaitu unauthorized
    
    */

  if(!req.headers.authorization){
    return res.status(401).json({msg : "unauthorized"})
  }

  /*
  
  nah selanjutnya kita check jenis tokennya apa dan kita hanya 
  melayani jenis token bearer ya
  
  */

  const [jenisToken,token] = req.headers.authorization.split(' ')

  if(jenisToken != 'Bearer') return res.status(401).json({msg : "unauthorized"})

  /*
  
  nah sekarang kita ambil tokennya dan kemudian kita verify 
  dimana dia akan menjadi informasi yang kita berikan pada payload pada
  saat di sign

  karena yang kita berikan pada payload adalah id dan email
  maka nanti setelah kita verify akan menghasilkan id dan email juga

  setelah itu kita check didalam database ada ga id yang dikirimkan tersebut
  kalo ada maka kita kembalikan response yang sesuai 

  kalo ga ada kita kembalikan saja 401 
  
  */

    try{
      const user = jwt.verify(token,"gass login")

        /*
  
        kita memberikan token dan secret keynya yang sama saat di sign
        kalo kita lihat hasilnya maka akan seperti ini

        { id: 5, email: 'muiz@gmail.com', iat: 1660476276, exp: 1661081076 }

        jadi ada expired yang sudah kita atur ya 

        tinggal kita check didatabase ada ga user dengan id 5
        tapi kalo tokennya itu invalid maka langsung error 

        otomatis dia akan menuju ke catchnya dan mengembalikan response 401 
       */



      const data = await mysql.select('*').from('post')
      res.status(200).json({message : "seluruh data",data})
    }catch(err){
        res.status(401).json({msg : err.message})
    }
  }
}


