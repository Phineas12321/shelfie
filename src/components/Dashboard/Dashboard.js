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
                Dashboard
                <Product/>
            </div>
        )
    }
}

export default Dashboard