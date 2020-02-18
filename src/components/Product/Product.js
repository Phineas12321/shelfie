import React from 'react'
import {Link} from 'react-router-dom'
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
                <Link to={`/edit/:id`} onClick={()=>props.getProduct(props.inventory_id)} >Edit</Link>
            </div>
        </div>
    )
}

export default Product