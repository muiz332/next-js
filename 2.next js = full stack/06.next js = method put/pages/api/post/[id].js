import mysql from "../../../db/mysql";

const getSingle = async (req,res) => {
    if(req.method === 'GET'){
        try{
            const data = await mysql.select('*').from('post').where('id',+req.query.id).first()
            if(!data) return res.status(404).json({msg : "data tidak ditemukan"})
            res.status(200).json(data)
        }catch(err){
            res.status(400).json({msg : err.message})
        }
    }else if(req.method === 'PUT'){
        try{
            const data = await mysql('post').where('id', +req.query.id).update(req.body)

            if(!data) return res.status(404).json({msg : "data tidak ditemukan"})
            res.status(200).json(data)
        }catch(err){
            res.status(400).json({msg : err.message})
        }
    }
}
 
export default getSingle;


/*

nah update ini mirip dengan get single data ya 
dimana dia memerlukan parameter yang dikirimkan untuk mengetahui
mana data yang harus diupdate

dan kalo kita berhasil mengupdate data itu yang dikembalikan 
dari knexnya adalah jumlah data yang berhasil diupdate

jika datanya 0 maka tidak ada yang diupdate
artinya datanya tidak ada

jadi itu saja mudah mudahan kalian paham



*/