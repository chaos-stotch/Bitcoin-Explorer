import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter } from "react-router-dom";
import './index.css';
import Navbar from './components/Navbar/Navbar';
import NetworkGraph from './components/NetworkGraph/NetworkGraph';
import HashrateGraph from './components/HashrateGraph/HashrateGraph'
import BlockSizeGraph from './components/BlockSizeGraph/BlockSizeGraph';
import Footer from './components/Footer/Footer';
import BreakingNews from './components/BreakingNews/BreakingNews';
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation';

import {
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
    <Route exact path ="/" element={
      <div>
        <Navbar />
        <BreakingNews />
        <BackgroundAnimation />
        <NetworkGraph />
        <HashrateGraph />
        <BlockSizeGraph />
        <Footer />
      </div>
    } />
    </Routes>
  </HashRouter>
);
