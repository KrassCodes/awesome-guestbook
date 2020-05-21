import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = { name: [],
            sender2: [] }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get('/messages')
    .then(response => {
      this.setState({ name: response.data[0].name})
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    })
  }
  // getData2 = () => {
  //   axios.get('/messages2')
  //   .then(response2 => {
  //     this.setState({ sender2: response2.data.name})
  //     console.log(response2)
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }

  render() {
    const { name } = this.state;


    return (
  
  <>
    <div className="header-container">
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" >My Awesome Guestbook</a>
        </div>
            <ul className="nav navbar-nav navbar-right">
                {/* <li><a href="#"><span className="glyphicon glyphicon-user"></span> {sender2}</a></li> */}
                {/* <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li> */}
            </ul>
      </div>
    </nav>
    </div>
        <div className="col-sm-9  col-md-10">
          <h2 className="sub-header">Hi there {name}, please write something!</h2>
          <div><input type="text"></input></div>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>From</th>
                  <th>Mesage</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{name}</td>
                  <td>Hi John, I wanted to reach out about the report you tweeted out. Do you have a link to it?</td>
                  <td>01/01/2020</td>
                  <td>Delte/Reply</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>






</>



    );
  }
}

export default App;