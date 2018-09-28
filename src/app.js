import React from 'react';
import ReactDOM from 'react-dom';
import { square, isEmail } from './utils.js';

console.log('am inside src/app.js');
console.log(square(3));
console.log(isEmail('abd@sdf.com'));

let app = {
  title: 'Main demo',
  subtitle: 'A taste of blockchain'
}

let template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
);

ReactDOM.render(template, document.getElementById('app'))


class OldSyntax {
  constructor() {
    this.name = 'Adam'
    this.getGreeting = this.getGreeting.bind(this)
  }
  getGreeting() {
    return this.name
  }
}
const old = new OldSyntax()
const oldGetGreeting = old.getGreeting
console.log(old)
console.log(oldGetGreeting())

class NewSyntax {
  name = 'Sally'
  getGreeting = () => {
    return this.name + this.na
  }
}
const newsyntax = new NewSyntax()
const newGetGreeting = newsyntax.getGreeting
console.log(newsyntax)
console.log(newGetGreeting())
