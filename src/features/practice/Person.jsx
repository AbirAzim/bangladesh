import React, { Component } from 'react';

class Person extends Component {
  render() {
    const { name, age, skills, profession } = this.props;
    return (
      <div>
        <div>
          <h2>Name: {name}</h2>
          <h4>{profession}</h4>
          <p>{age}</p>
          <ul>
            {skills.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Person;
