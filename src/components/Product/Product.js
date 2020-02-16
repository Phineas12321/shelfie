import React from 'react'
import './product.css'

function Product(props){
    
    return(
        <div className='product-box'>
            <img className='product-img' src={props.inventory.image_url} alt=''/>
            <div className='product-info'>
                <p>{props.inventory.product_name}</p>
                <p>${props.inventory.price}</p>
            </div>
            <div>
                <button onClick={()=>props.deleteProduct(props.inventory.inventory_id)} >Delete</button>
                <button onClick={()=>props.getProduct(props.inventory_id)}  >Edit</button>
            </div>
        </div>
    )
}

export default Product