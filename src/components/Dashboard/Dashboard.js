import React from 'react'
import Product from '../Product/Product'
//import Form from '../Form/Form'
import axios from 'axios'
import './dashboard.css'

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inventory: [],
            product: {}
        }
        this.getInventory = this.getInventory.bind(this)
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    componentDidMount(){
        this.getInventory()
    }

    componentDidUpdate(){
        this.getInventory()
    }

    getInventory(){
        axios.get('/api/inventory').then(res => this.setState({inventory: res.data}))
    }

    deleteProduct(id){
        axios.delete(`/api/product/${id}`).then(this.getInventory())
        
    }
    render(){
       return(
            <div className='dashboard-box'>
                {this.state.inventory.map((e, i)=>{
                    return <Product getProduct = {this.getProduct} deleteProduct = {this.deleteProduct} inventory={e} key={i} />
                })}
            </div>
        ) 
    }
}

export default Dashboard