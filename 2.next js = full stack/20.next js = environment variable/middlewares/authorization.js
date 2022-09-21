import jwt from 'jsonwebtoken'

const authorization = (req,res) => {
    return new Promise((resolve) => {
        if(!req.headers.authorization){
            return res.status(401).json({msg : "unauthorized"})
          }
        
          const [jenisToken,token] = req.headers.authorization.split(' ')
        
          if(jenisToken != 'Bearer') return res.status(401).json({msg : "token type not allowed"})
          jwt.verify(token,process.env.JWT_SECRET_KEY,function(err,decode){
            if(err) return res.status(401).json({msg : err.message})

            return resolve(decode)
          })
    })
}
 
export default authorization;

/*

nah jadi kita ubah menjadi promise
jika akan error langsung saja kita kembalikan response erronya

kalo berhasil kita kembalikan si resolvenya

pergi kehalaman post


*/