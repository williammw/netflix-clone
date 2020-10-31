import React from 'react';
import { Counter } from './features/Counter';
import './App.css';
import Row from './Row';
import requests from './requests'

function App() {
  return (
    <div className="App">
      <Row title={"Netflix Originial"} fetchUrl={requests.fetchNetflixOriginals}/> 
      <Row title={"Trending Now"}  fetchUrl={requests.fetchTranding}/> 
    </div>
  );
}

export default App;
