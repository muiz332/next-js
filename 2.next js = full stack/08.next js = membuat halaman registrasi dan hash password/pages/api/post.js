// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mysql from '../../db/mysql'

export default async function handler(req,res){

  if(req.method === 'POST'){
    try{
      const hasil = await mysql('post').insert(req.body)
      res.status(201).json({msg : "data telah berhasil ditambahkan"})
    }catch(err){
      res.status(404).json({msg : err.message})
    }
  }else if(req.method === "GET"){
    try{
      const data = await mysql.select('*').from('post')
      res.status(200).json({message : "seluruh data",data})
    }catch(err){
        res.status(500).json({msg : err.message})
    }
  }
}


