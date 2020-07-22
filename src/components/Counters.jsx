import React, { Component } from 'react';
import CounterComponent from './CounterComponent';

class Counters extends Component {
  state = {
    history: [],
    isShown: false,
    counters: [
      {
        id: 1,
        value: 0,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
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
        {this.state.counters.map((counter) => {
          return (
            <CounterComponent
              history={this.state.history}
              historyAdded={this.historyAdded}
              add
              key={counter.id}
              valueIndex={counter.id}
              value={counter.value}
            />
          );
        })}
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
