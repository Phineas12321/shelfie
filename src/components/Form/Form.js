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
    }

    createProduct(){
        axios.post('/api/product').then(res =>{
            this.setState({
                image_url: this.handleImageUrl,
                product_name: this.handleProductName,
                price: this.handlePrice
            })
            this.props.getInventory()
            this.handleReset()
        }).catch(err => console.log(err))
        
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
                    <button onClick={this.createProduct} >Add to Inventory</button> 
                </div>
                
            </div>
        )
    }
}

export default Form