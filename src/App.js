import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'Josh',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: 'Alisha',
        phone: '010-0000-0001'
      }
    ],
    keyword: ''
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } 
          : info 
      )
    })
  }
  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
          <input 
            placeholder="type your search keyword.." 
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <PhoneInfoList 
          data={filteredList} 
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
          />
      </div>
    );
  }
}

export default App;
