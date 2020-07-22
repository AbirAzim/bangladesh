import React, { Component } from 'react';

export class CounterComponent extends Component {
  state = {
    value: this.props.value,
  };

  increment = (history, cb, index) => {
    const { value } = this.state;
    this.setState({ value: value + 1 });

    cb(() => {
      const his = [`item ${index} is increment by 1`, ...history];
      return his;
    });
  };

  decrement = (history, cb, index) => {
    const { value } = this.state;
    value === 0 ? this.formatCount() : this.setState({ value: value - 1 });

    value !== 0 &&
      cb(() => {
        const his = [`item ${index} is decrement by 1`, ...history];
        return his;
      });
  };

  style = {
    fontSize: 35,
    fontWeight: 'bold',
  };

  formatCount = () => {
    return this.state.value === 0 ? 'Zero' : this.state.value;
  };

  render() {
    const { history, historyAdded, valueIndex } = this.props;

    return (
      <React.Fragment>
        <div style={this.style} className='container text-center'>
          <button
            className='btn btn-danger mr-3'
            onClick={() => this.decrement(history, historyAdded, valueIndex)}
          >
            Decrement
          </button>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            className='btn btn-success'
            onClick={() => this.increment(history, historyAdded, valueIndex)}
          >
            Increment
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let badgeClasses = 'mr-3 badge badge-';
    badgeClasses += this.state.value === 0 ? 'warning' : 'primary';
    return badgeClasses;
  }
}

export default CounterComponent;
