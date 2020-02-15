import React from 'react'
import axios from 'axios'
import './form.css'

class Form extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            image_url: '',
            product_name: '',
            price: 0
        }

        this.handleImageUrl = this.handleImageUrl.bind(this)
        this.handleProductName = this.handleProductName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.createProduct = this.createProduct.bind(this)
    }

    handleImageUrl(e){
        this.setState({image_url: e.target.value})
    }

    handleProductName(e){
        this.setState({product_name: e.target.value})
    }

    handlePrice(e){
        this.setState({price: e.target.value})
    }

    handleReset(){
        this.setState({
            image_url: '',
            product_name: '',
            price: 0
        })
        console.log(this.state.image_url)
    }

    createProduct(e){
        console.log(e)
        axios.post('/api/product', e)
        
        .catch(err => console.log(err))
        this.handleReset()
    }

    render(){
        return(
            <div className='form-box'>
                Image URL:
                <input onChange={this.handleImageUrl} />
                Product Name:
                <input onChange={this.handleProductName} />
                Price:
                <input onChange={this.handlePrice} />
                <div className='form-buttons'>
                    <button onClick={this.handleReset} >Cancel</button>
                    <button onClick={()=>{this.createProduct({image_url: this.state.image_url, product_name: this.state.product_name, price: this.state.price})}} >Add to Inventory</button> 
                </div>
                
            </div>
        )
    }
}

export default Form