
import './App.css';

import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import * as React from "react"

import TheStack from './layouts/TheStack'
import TheBox from './layouts/TheBox'
import TheCenter from './layouts/TheCenter';
import TheCluster from './layouts/TheCluster';
import TheSideBar from './layouts/TheSidebar';
import TheSwitcher from './layouts/TheSwitcher';


function App() {
  return (
    <div>
      <div className="container">
        <h1>Welcome to my site</h1>
      </div>
      <TheBox />
      <TheStack />
      <TheCenter />
      <TheCluster />
      <TheSideBar />
      <TheSwitcher/>
      <Routes>
        {/* <Route path="box" element={<Box />} /> */}
        {/* <Route path="stack" element={<TheStack />} />
        <Route path="box" element={<TheBox />} />
        <Route path="center" element={<TheCenter/>} />
        <Route path="cluster" element={<TheCluster/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
