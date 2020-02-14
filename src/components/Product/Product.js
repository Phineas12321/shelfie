import React from 'react'
import './product.css'

class Product extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        return(
            <div className='product-box'>
                <img className='product-img' src={this.props.inventory.imageUrl} alt=''/>
                <div className='product-info'>
                    <p>{this.props.inventory.productName}</p>
                    <p>${this.props.inventory.price}</p>
                </div>
                <div>
                    <button  >Delete</button>
                    <button  >Edit</button>
                </div>
            </div>
        )
    }
}

export default Product