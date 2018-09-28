import React from 'react';
import Header from './header';
import Footer from './footer';
import Leftmenu from './leftmenu';

export default class Menu extends React.Component {
  render () {
    return (
      <div>
        This is main menu
        <Header />
        <Leftmenu />
        <Footer />
      </div>
    )
  }
}
