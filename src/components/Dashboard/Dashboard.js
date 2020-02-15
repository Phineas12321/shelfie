import React from 'react'
import Product from '../Product/Product'

class Dashboard extends React.Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){

        
        return(
            <div>
                {this.props.inventory.map((e)=>{
                    console.log(e)
                    return <Product inventory={e} />
                })}
            </div>
        )
    }
}

export default Dashboard