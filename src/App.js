// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Student from './props  in Class based/Student';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Tarun"
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Hello world !</h1>
        <Student name={this.state.name} email={"tarun@test.com"} />
        <button onClick={() => this.setState({ name: "Peter" })} >Update Name</button>
      </div>
    );
  }
}
export default App;