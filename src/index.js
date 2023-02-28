import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter } from "react-router-dom";
import './index.css';

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
        Hello
      </div>
    } />
    </Routes>
  </HashRouter>
);
