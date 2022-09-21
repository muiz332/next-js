function handler(req,res){
    res.status(200).json({
        method : req.method,
        params : req.query.id
    })
}

export default handler