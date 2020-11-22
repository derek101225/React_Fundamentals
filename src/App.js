import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './site/components/Header';
import Footer from './site/components/Footer';
import Sidebar from './site/components/Sidebar';
import {BrowserRouter,} from 'react-router-dom';

const App = () => {
  return (
    <div >
      <Header />
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      <Footer />
    </div>
  );
}


export default App;
