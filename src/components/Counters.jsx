import React, { Component } from 'react';
import CounterComponent from './CounterComponent';

class Counters extends Component {
  state = {
    history: [],
    isShown: false,
  };

  historyAdded = (historyChange) => {
    this.setState({ history: historyChange() });
  };

  clickHandler = () => {
    this.setState({
      isShown: !this.state.isShown,
    });
  };

  render() {
    return (
      <div>
        <CounterComponent
          history={this.state.history}
          historyAdded={this.historyAdded}
        />
        <CounterComponent
          historyAdded={this.historyAdded}
          history={this.state.history}
        />
        <CounterComponent
          historyAdded={this.historyAdded}
          history={this.state.history}
        />
        <CounterComponent
          historyAdded={this.historyAdded}
          history={this.state.history}
        />
        <button className={'btn btn-primary'} onClick={this.clickHandler}>
          {this.state.isShown ? 'Hide All History' : 'Show All History'}
        </button>
        <ul>
          {this.state.isShown &&
            this.state.history.map((his, ind) => {
              return <li key={ind}>{his}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default Counters;
