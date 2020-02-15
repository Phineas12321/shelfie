import React from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends React.Component{
    constructor(props){
        super(props)

        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(){
        axios.delete('/api/product/:id').then(res => this.props.inventory = res.data)
        this.props.getInventory()
    }
    render(){
       return(
            <div>
                {this.props.inventory.map((e)=>{
                    console.log(e)
                    return <Product deleteProduct = {this.deleteProduct} inventory={e} />
                })}
            </div>
        ) 
    }
}

export default Dashboard