import React, { Component } from 'react';

export class CounterComponent extends Component {
  state = {
    count: 0,
  };

  increment = (history, cb) => {
    const { count } = this.state;
    this.setState({ count: count + 1 });

    cb(() => {
      const his = ['increment by 1', ...history];
      return his;
    });
  };

  decrement = (history, cb) => {
    const { count } = this.state;
    count === 0 ? this.formatCount() : this.setState({ count: count - 1 });

    count !== 0 &&
      cb(() => {
        const his = ['Decrement by 1', ...history];
        return his;
      });
  };

  style = {
    fontSize: 35,
    fontWeight: 'bold',
  };

  formatCount = () => {
    return this.state.count === 0 ? 'Zero' : this.state.count;
  };

  render() {
    const { history, historyAdded } = this.props;
    return (
      <React.Fragment>
        <div style={this.style} className='container text-center'>
          <button
            className='btn btn-danger mr-3'
            onClick={() => this.decrement(history, historyAdded)}
          >
            Decrement
          </button>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            className='btn btn-success'
            onClick={() => this.increment(history, historyAdded)}
          >
            Increment
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let badgeClasses = 'mr-3 badge badge-';
    badgeClasses += this.state.count === 0 ? 'warning' : 'primary';
    return badgeClasses;
  }
}

export default CounterComponent;
