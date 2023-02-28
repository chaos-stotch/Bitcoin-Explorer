import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter } from "react-router-dom";
import './index.css';
import Navbar from './components/Navbar/Navbar';
import NetworkGraph from './components/NetworkGraph/NetworkGraph';
import HashrateGraph from './components/HashrateGraph/HashrateGraph'
import BlockSizeGraph from './components/BlockSizeGraph/BlockSizeGraph';

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
        <NetworkGraph />
        <HashrateGraph />
        <BlockSizeGraph />
      </div>
    } />
    </Routes>
  </HashRouter>
);