import mysql from "../../../db/mysql";

const getSingle = async (req,res) => {
    try{
        const data = await mysql.select('*').from('post').where('id',+req.query.id).first()
        if(!data) return res.status(404).json({msg : "data tidak ditemukan"})
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({msg : err.message})
    }
}
 
export default getSingle;


/*

nah jadi kita buat seperti itu kita menggunakan where clause untuk mengambil single data ya

dimana nanti sesuai dengan id yang kita kirimkan 
maka kita tangkap menggunakan req.query.id dan jangan lupa req.query.id itu menghasilnya
type data string ya jadi kalian harus mengubahnya menjadi number

dan jangan lupa kalian harus atasi masalah ketika datanya tidak ada
kalo datanya tidak ada maka si knexnya akan mengembalikan type data undefined

dimana undefined itu kalo kita memiliki boolean false
lalu kita bisa kembalikan responsenya itu data tidak ditemukan
dengan code status 404 artinya notFound

nah jadi seperti itu get all data dan get single data 
mudah mudahan kalian paham



*/  