import React from 'react'
import logo from '../availitylogo.jpg';
import Navbar from './navbar'
import TopBar from './topBar'
import CardMedia from '@material-ui/core/CardMedia';

function Header(props) {
  const styles = {

    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
      marginTop:'30'
    }
  };

  return (
    <div>
      <img src={logo} className="App-logo" alt="Logo" onClick={props.goHome}/>
      <Navbar/>
    </div>
  )
}

export default Header
