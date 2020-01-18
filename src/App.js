import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
      super(props);
      this.addOne = this.addOne.bind(this);
      this.minnusOne = this.minnusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        title:'Welcome to Counter Example App',
        count : 0
      }
  }

  componentDidMount () {
    try{
      const stringCount = localStorage.getItem('count')
      const count = parseInt(stringCount, 10)
      if (!isNaN(count)){
        this.setState(() => ({count}));
      }
    }
    catch(e){

    }
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.count !== this.state.count){
        localStorage.setItem('count', this.state.count)
    }
  }

  addOne () {
    this.setState( (prevState) => {
      return {
        count : prevState.count + 1
      }
    }); 
  }
  minnusOne () {
    this.setState( (prevState) => {
      return {
        count : prevState.count - 1
      }
    });
  }
  handleReset () {
    this.setState( () => {
      return {
        count : 0
      }
    });
  }

  render() {
    return (
      <center>
        <div>
        <h1>{this.state.title}</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minnusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
        </div>
      </center>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
serviceWorker.register();