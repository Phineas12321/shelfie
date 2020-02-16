import React from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      inventory: [],
      product: {}
    }

    this.getInventory = this.getInventory.bind(this)
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

  getProduct(id){
    axios.get(`/api/product/${id}`).then(res => this.setState({product: res.data}))
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <section className='app-box'>
          <Dashboard getProduct = {this.getProduct} getInventory = {this.getInventory} inventory = {this.state.inventory} />
          <Form product = {this.state.product} getInventory = {this.getInventory} />
        </section>
      </div>
    );
  }
}

export default App;
