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
            res.status(200).json({msg : "berhasil diupdate",jumlah: data})
        }catch(err){
            res.status(400).json({msg : err.message})
        }
    }else if(req.method === "DELETE"){
        try{
            const data = await mysql('post').where('id',+req.query.id).del()

            if(!data) return res.status(404).json({msg : "data tidak ditemukan"})
            res.status(200).json({msg : "berhasil dihapus",jumlah: data})   
        }catch(err){
            res.status(500).json({msg : err.message})
        }
    }
}
 
export default getSingle;


/*

nah jadi begitu untuk delete kita tinggal tambahkan methodnya delete
dan caranya mirip seperti get single data

mudah mudahan kalian paham

*/