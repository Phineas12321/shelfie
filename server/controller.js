module.exports = {
    // getAll: (req, res)=>{
    //     const db = req.app.get('db') 

    //     db.get_inventory().then(e => {
    //         res.status(200).send(e)
    //     }).catch(err => {
    //         res.status(500).send({errorMessage: `something went wrong`})
    //         console.log(err)
    //     })
    // },

    getAll: async (req, res) =>{
        const db = req.app.get('db')
        let inventory = await db.get_inventory().catch(err => res.status(500).send(err))

        //inventory.forEach((e, i)=>inventory[i].image_url = image_url)
        res.status(200).send(inventory)
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

    create: async (req, res) => {
        const {image_url, product_name, price} = req.body
        const db = req.app.get('db')
        await db.create_product(image_url, product_name, price).then(()=>res.sendStatus(200)).catch(err => res.status(500).send(err))
    }

    // delete: (req, res)=>{
    //     let id = req.params.id
    //     let
    // }
}