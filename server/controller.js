module.exports = {
    getAll: (req, res)=>{
        const db = req.app.get('db') 

        db.get_inventory().then(e => {
            res.status(200).send(e)
        }).catch(err => {
            res.status(500).send({errorMessage: `something went wrong`})
            console.log(err)
        })
        
    },

    // create: (req, res)=>{
    //     const db = req.app.get('db')
    //     const {imageUrl} = req.body

    //     db.create_product({imageUrl}).then(()=>{
    //         res.status(200).send(imageUrl)
    //     }).catch(err => {
    //         res.status(500).send({errorMessage: `something is wrong`})
    //         console.log(err)
    //     })
    // },

    create: (req, res) => {
        const db = req.app.get('db')
        const {image_url, product_name, price} = req.body
        
        db.create_product([image_url, product_name, price]).then(()=>{
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send({errorMessage: `something is wrong`})
            console.log(err)
        })
    },

    delete: (req, res)=>{
        const db = req.app.get('db')
        console.log(req.params)
        const {id} = req.params
        
        db.delete_product(id).then(()=>{
            res.sendStatus(200)
        }).catch(err=>{
            res.status(500).send({errorMessage: `something is wrong`})
            console.log(err)
        })
        
    }
}