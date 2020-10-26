import React, { Component } from "react";
import './styles.css';
import Header from './componentes/Header';

/* comentado para refazer de modo stateless
class App extends Component{
  render() {
    return (
    <div className="App">
      <h1>Hello RockerSeat</h1>
    </div>
    );
  }
}
*/

const App = () => (
  <div className="App">
    <Header />
  </div>
);
export default App;
