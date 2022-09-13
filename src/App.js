import './App.css'
import React, { Component } from 'react'
import { CardList } from './components/card-list/Card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(props){
      super(props);
      
      this.state = {
          monsters: [],
          searchField: ''
      }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({monsters: data}))
  }

  handleChange = (e) => this.setState({searchField: e.target.value})

  render(){
      const { monsters, searchField } = this.state
      return (
          <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox searchField={searchField} placeholder='Search monsters' handleChange={this.handleChange}/>
            <CardList monsters={monsters} searchField={searchField}/>
          </div>
      )
  }
}

export default App