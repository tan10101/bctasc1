import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Leftmenu from './LeftMenu';

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
