import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import DevTools from 'mobx-react-devtools';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

const store = observable({
  count: 0,
});

store.increment = function() {
  this.count++;
};

store.decrement = function() {
  this.count++;
};

@observer
class App extends Component {

  handleIncrement = () => {this.props.store.increment()};
  handleDecrement = () => {this.props.store.decrement()};

  render() {
    return (
      <div className="App">
        <DevTools />
        <h1>{this.props.store.count}</h1>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
        <button></button>
      </div>
    );
  }
}

ReactDOM.render(<App store={store} />, document.getElementById('root'));

serviceWorker.unregister();
