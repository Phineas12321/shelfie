import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './form.css'

class Form extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            image_url: '',
            product_name: '',
            price: 0,

            isEditing: false,

            display_img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATQAAACjCAMAAAAzSxLiAAAAIVBMVEXy8vLd3d3c3Nzu7u7l5eXh4eHr6+vt7e3o6Ojg4OD09PQ2G927AAAEFUlEQVR4nO2dWYKrIBREI6Ii+1/w03SMGi8BicCjrPPRHxm0ObnMg48HIYQQQgghhBBCCCGEEEIIIYQQQgghhJD/AJuX0sm9hKHPy1A6wT/TGj02jWqa158jwnvqy0fn99Tmm0c6bdrSyf6JvptSeUycI7lOp2c+Ot+vM6UT/gNmPJHmC1FNvdbMmTihtRnbF4qzp7VxqLMa1eWcTdZ06eTHYPt35lQ5We7Z9DWGmi7i7K1NVVmq6fd/3+bEvKwpXWFrre1UmcLFvO7b1SwtdzZ5S6uwP/WW1me+MaVFQGkRUFoEPaWdB0KaWHu26VIEkT0P0gat5658p9PEIKK0Qf+NS84dni6FNjxprd4O5Kqpr3N5txpC2jaa9s7+OjtXW4OTdhxiU93VN0aT1gvj35d36MGkteL4t7p4YBpMmhHHv6/OoGDSXBMt16YOS9rgmjjXl+ZPLGly7pyTFyjNBo3F3kNaM4Zd0bY6pKbFkuacBw2TNjkLap9AzBFcFGm27ZqgVh1WpDnLtDGgTPtzFlJrYEnrf6g9F2cB1QaWtNa1iMh4pdnlagHWsKQ5awJvib115rUGJk1u3fpz596Z7xtg0uRQU74rfTrzWAOTZqVSzT/IcXD23RqYtIcdDquWlbcWEJx9tQYhbTdH8LGkVAU4k6sPdysXokewkza3t9bGQzN6ZwgcziZc1iAi7XOarn92h+Y3R+PdlON25rQGKc0+2l5rbczg38f0zZnLGqS0x7LFLOAangXiojVUaaGX8C6ql6zdW5rfmZKs3Vma9TuTrd1Ymg3b8CJYu6+0oDiTrd1WWrAzwdoNpIkNj+O4xglrEMtHv0qz0tbpU85mdtbgpVnTSCs5TjrbW0OXNjlTwvoXfVLZ3hp4mWaf+7UP1iKcba1hS5ucvZK3eznK2WZ8DVra4uzDWuQm7vUayNJWZztrsRvf10sAVwRbZ5skRx8WcAdp9mPN8ivN8QcsgJVp0t4oezjnZLIW2Ed3SIMv0z7j7C9Uwvub+NKESJP2E4gnOZ2QhpU9j5GW4jwdsEg7SEtyBhG4tDTnNmFLS3TWFbS0VOeDIUtLdqYasLR059DhSkt4dh+stJTnHaJKG1KeESn0CGpe1OffG0VpC7mlgWZPSvNSPntSGqWlkMbsSWnLK5TmhdIiOM4RsHHrpby0miNtkz1TgpU919MSOp2O9bEqWNIyPS8KS1omKC0CSouA0iKAkMaHOITDx4XE8OoAqDHvLz6U+rEu4f00nzFhm1Zo5S63rVLauuI9L8ttq3xu1NldYddSZ5G2CbUiVBloj6JPEKyzRHtSzFqCE/tzMW8MKKFNVfkcvJWp1ZSfrpd3edfDYKa2U0a0qbD7RAghhBBCCCGEEEIIIYQQQgghhBDy5B93uER7VLA1QQAAAABJRU5ErkJggg=='
        }

        this.baseImage = this.state.display_img

        this.handleImageUrl = this.handleImageUrl.bind(this)
        this.handleProductName = this.handleProductName.bind(this)
        this.handlePrice = this.handlePrice.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.createProduct = this.createProduct.bind(this)
    }

    componentDidMount(){
        console.log(this.props)
        //this.getProduct(this.props.inventory_id)
    }

    componentDidUpdate(oldProps){
        if(oldProps !== this.props){
            this.setState({
                image_url: this.props.image_url,
                product_name: this.props.product_name,
                price: this.props.price
            })
        }
    }

    handleImageUrl(e){
            this.setState({
                image_url: e.target.value,
                display_img: e.target.value
            })
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
            price: 0,
            display_img: this.baseImage
        })
        document.getElementById('img-url').value = this.state.image_url
        document.getElementById('prod-name').value = this.state.product_name
        document.getElementById('price').value = this.state.price
    }

    createProduct(){
        axios.post('/api/product', {...this.state}).then((res => {
            this.props.getInventory()
            this.handleReset()
        }))
        
        .catch(err => console.log(err))
    }

    getProduct(id){
        axios.get(`/api/product/${id}`).then(res => this.setState({
            image_url: res.data.image_url,
            product_name: res.data.product_name,
            price: res.data.price
        }))

    }

    updateProduct(id){
        
        // axios.put(`/api/product${id}`).then(()=>{
        //     this.handleReset()
        // }).catch(err => console.log(err))
    }

    render(){

        return(
            <div className='form-on-page'>
                <div className='form-box'>
                    <section className='form-top'>
                        <img id='formImage' className='form-img' src={`${this.state.display_img}`} alt=''/>
                    </section>
                    <section className='form-bottom'>
                        Image URL:
                        <input id='img-url' onChange={this.handleImageUrl} />
                        Product Name:
                        <input id='prod-name' onChange={this.handleProductName} />
                        Price:
                        <input id='price' onChange={this.handlePrice} />

                        <div className='form-buttons'>
                            <button onClick={this.handleReset}>Cancel</button>
                            <div>
                                {this.state.isEditing? <Link to='/' onClick={()=>{this.updateProduct()}} >Save Changes</Link>:
                                <Link to='/' onClick={()=>{this.createProduct()}} >Add to Inventory</Link> }
                            </div>
                            
                        </div>
                    </section>
                </div>
            </div>
            
        )
    }
}

export default Form