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
      inventory: []
    }
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory = ()=>{
    axios.get('/api/inventory').then(res => this.setState({inventory: res.data}))
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <section className='app-box'>
          <Dashboard inventory = {this.state.inventory} />
          <Form/>
        </section>
      </div>
    );
  }
}

export default App;
