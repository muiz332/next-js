import mysql from '../../../db/mysql'
import bcrypt from 'bcryptjs'

const register = async (req,res) => {
    if(req.method !== "POST"){
        return res.status(405).json({msg : "tidak melayani method selain post"})
    }

    try{
        const {email,password} = req.body

        // membuat hash password

        const salt = bcrypt.genSaltSync(10)

        // gabung salt dan password
        const passwordHash = bcrypt.hashSync(password,salt)

        const user = await mysql('users').insert({email,password : passwordHash})

        res.status(202).json({msg : "user telah ditambahkan",userID : user[0]})
    }catch(err){
        return res.status(400).json({msg : err.message})
    }
}
 
export default register;


/*

nah jadi sesimple itu ya untuk melakukan hash pada password
mudah mudahan kalian paham

*/