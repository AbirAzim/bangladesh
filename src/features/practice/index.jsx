import React, { Component } from 'react';
import Person from './Person';

class Practice extends Component {
  render() {
    const datas = data;
    return datas.map((dat) => {
      return <Person name={dat.name} age={dat.age} skills={dat.skills} />;
    });
  }
}

const data = [
  { name: 'Nusrat', age: 32, skills: ['Js', 'Node', 'Python'] },
  { name: 'Nusrt', age: 32, skills: ['Js', 'Node', 'Python'] },
  { name: 'Nurat', age: 32, skills: ['Js', 'Node', 'Python'] },
];

export default Practice;
