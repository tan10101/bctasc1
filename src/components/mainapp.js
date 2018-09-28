import React from 'react';
import ReactDOM from 'react-dom';
import MainMenu from './Menu/Main';
import { square, isEmail } from '../utils';

console.log('am inside src/app.js');
console.log(square(3));
console.log(isEmail('abd@sdf.com'));

let app = {
  title: 'Main demo',
  subtitle: 'A taste of blockchain'
}

export default class MainApp extends React.Component {
  render () {
    return (
      <div>
        <MainMenu />
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
      </div>
    )
  }
}
