import React from 'react';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {

    }
  }
  render(){
    return (
      <div className="App">
        <Dashboard/>
        <Form/>
        <Header/>
      </div>
    );
  }
}

export default App;
