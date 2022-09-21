// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mysql from '../../db/mysql'
import authorization from '../../middlewares/authorization'

export default async function handler(req,res){

  if(req.method === 'POST'){
    try{
      const user = await authorization(req,res)
      const hasil = await mysql('post').insert(req.body)
      res.status(201).json({msg : "data telah berhasil ditambahkan"})
    }catch(err){
      res.status(404).json({msg : err.message})
    }
  }else if(req.method === "GET"){
    try{
      const user = await authorization(req,res)
      const data = await mysql.select('*').from('post')
      res.status(200).json({message : "seluruh data",data})
    }catch(err){
        res.status(500).json({msg : err.message})
    }
  }
}

/*

nah kita panggil middlewarenya disini 
kalo kita testing sudah berhasil ya 

errornya sudah kita handle

nah kita akan terapkan middelware ini ke create update dan delete
tinggal kalian copy saja middelwarenya ya 

nah dimateri selanjutnya kita akan mulai bikin UInya 
perlu kalian ketehui didalam next js ini 

untuk melakukan request ke database bisa langsung difront endnya 
pada bagian getServerSideProps dan ada juga getInitialProps

jadi kita bisa nulis disitu 
tapi masalahnya ketika kita buat aplikasi mobile yang butuh data yang sama
maka kita harus bikin ulang aplikasi tersebut dari 0
karena datanya sudah paten didalam UInya

karena itu kita buat rest API untuk get datanya
bisa diget diweb ataupun di mobile jadi lebih flexsible

jadi seperti itu ya authorization mudah mudahan kalian paham

*/

