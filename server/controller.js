module.exports = {
    getAll: (req, res)=>{
        const db = req.app.get('db') 

        db.get_inventory().then(e => {
            res.status(200).send(e)
        }).catch(err => {
            res.status(500).send({errorMessage: `something went wrong`})
            console.log(err)
        })
    }
}