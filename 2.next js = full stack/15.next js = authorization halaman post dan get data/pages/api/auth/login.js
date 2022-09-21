import mysql from '../../../db/mysql'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const login = async (req,res) => {
    if(req.method !== "POST") {
        return res.status(405).json({msg : "method not allowed"})
    }

    try{

        const {email,password} = req.body

        const user = await mysql('users').where('email',email).first()

        if(!user){
            return res.status(401).json({msg : "users tidak ditemukan"})
        }

        // mengecheck password
        const checkPassword = bcrypt.compareSync(password,user.password)

        if(!checkPassword){
            return res.status(401).json({msg : "password salah"})
        }

        // jika benar passwordnya buat tokennya 

        const token = jwt.sign({id : user.id, email : user.email},'gass login',{expiresIn : "7d"})

        /*
        
        nah nanti kalian bisa simpan secret keynya ini kedalam env variable
        nah kalian juga bisa tentukan algoritmanya untuk defaultnya itu SHA256

        kalian juga bisa memberikan kadaluarsa pada tokennya 
        dengan memberikan pada parameter selanjutnya itu object
        yang isinya expiresIn dengan satuan h untuk jam d untuk hari 

        untuk lebih detilnya kalian bisa baca didocumentasinya 

        nah selanjutnya tinggal kita kirimkan tokennya dari responsenya 
        
        */


    
        return res.status(200).json({msg : "berhasil login",token})
    }catch(err){
        return res.status(400).json({msg : err.message})
    }
}
 
export default login;


/*

nah nanti token ini akan kita gunakan untuk melakukan authorisasi dimana kita
akan membatasi akases ke resource atau aplikasi kita 


oke jadi seperti itu dulu cara penggunakan dari JWT untuk membuat tokennya
mudah mudahan kalian paham ya 


*/