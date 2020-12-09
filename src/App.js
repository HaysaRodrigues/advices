import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      randomAdvice: ''
    }
  }

  componentDidMount() {
    this.getAdvice();
}

  getAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => this.setState({randomAdvice: data.slip.advice}));
  }

  render () {
    return (
      <>
      {this.state.randomAdvice}
      </>
    );
  }
}

export default App;

