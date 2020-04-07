import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/head'
import Content from './components/content'
import SideBar from './components/side'

import ColorBar from './components/colorbar'
import {connect} from 'react-redux'


function App(props) {
  console.log(props.show)
  return (
    <div className="container-fluid">
      <div className="app">
          <Head />
        <div className="row" > 
            <SideBar />
           
            <ColorBar />
            <Content /> 
        </div>
      </div> 
  
    </div>
    );
}
const mapStateToProps = state => {
  return {
    show: state.show_item
  };
}
export default connect(mapStateToProps,null)(App);
