import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
// import {Container, Row, Col,Button ,Tabs,Tab, TabContainer ,TabContent ,TabPane  } from 'react-bootstrap'
import Navbarctm from './Compoenets/Shared/Navbarctm'
import Footer from './Compoenets/Shared/Footer'
import AppRoutes from './AppRoutes'


function App() {
  return (
    <div>
      <Navbarctm></Navbarctm>
        <AppRoutes></AppRoutes>
      <Footer></Footer>
    </div>
  );
}

export default App;
