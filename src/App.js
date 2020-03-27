import React from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './components/head'
import Content from './components/content'
import SideBar from './components/side'
import {MDBContainer} from 'mdbreact'

function App() {
  return (
    <div className="app">
        <Head />
      <div className="row"> 
          <SideBar />
          <Content /> 
      </div>
    </div> 
  );
}

export default App;
