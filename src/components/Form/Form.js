import React from 'react'
import './form.css'

class Form extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            imageUrl: '',
            productName: '',
            price: 0
        }

        this.handleImageUrl = this.handleImageUrl.bind(this)
        this.handleProductName = this.handleProductName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleImageUrl(e){
        this.setState({imageUrl: e.target.value})
    }

    handleProductName(e){
        this.setState({productName: e.target.value})
    }

    handlePrice(e){
        this.setState({price: e.target.value})
    }

    handleReset(){
        this.setState({
            imageUrl: '',
            productName: '',
            price: 0
        })
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
                    <button>Add to Inventory</button> 
                </div>
                
            </div>
        )
    }
}

export default Form