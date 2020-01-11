import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = { sender: [],
            sender2: [] }

  componentDidMount() {
    this.getData();
    this.getData2();
  }

  getData = () => {
    axios.get('/messages')
    .then(response => {
      this.setState({ sender: response.data[0].sender})
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    })
  }
  getData2 = () => {
    axios.get('/messages2')
    .then(response2 => {
      this.setState({ sender2: response2.data.name})
      console.log(response2)
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    const { sender, sender2 } = this.state;


    return (
      <div>
        {sender}
        <br></br>
        {sender2}

      </div>


    );
  }
}

export default App;