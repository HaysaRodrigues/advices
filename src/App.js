import './App.scss';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      randomAdvice: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getAdvice();
  }

  getAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => this.setState({randomAdvice: data.slip.advice}));
  }

  handleClick(event) {
    event.preventDefault();
    this.getAdvice();
  }

  render () {
    return (
      <div className='App'>
        <div className='line'></div>
          <div className='advice'>{this.state.randomAdvice}</div>
        <div className='line'></div>
        <button className='button' onClick={this.handleClick}>
            give me another advice
        </button>
      </div>
    );
  }
}

export default App;

