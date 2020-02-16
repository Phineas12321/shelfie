import React from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends React.Component{
    constructor(props){
        super(props)

        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct(id){
        axios.delete(`/api/product/${id}`).then(this.props.getInventory())
        
    }
    render(){
       return(
            <div>
                {this.props.inventory.map((e)=>{
                    return <Product deleteProduct = {this.deleteProduct} inventory={e} />
                })}
            </div>
        ) 
    }
}

export default Dashboard