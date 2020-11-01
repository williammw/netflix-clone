import React from 'react';
import { Counter } from './features/Counter';
import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">

      {/* Navbar */}
      <Nav/>
      {/* Banner */}
      <Banner/>
      {/* Row */}
      <Row isLargeRow={true} title={"Netflix Originial"} fetchUrl={requests.fetchNetflixOriginals}/> 
      <Row title={"Trending Now"}  fetchUrl={requests.fetchTranding}/> 
      <Row title={"Top Rated"}  fetchUrl={requests.fetchTopRated}/> 
      <Row title={"Action Movies"}  fetchUrl={requests.fetchActionMovies}/> 
      <Row title={"Comedy Movies"}  fetchUrl={requests.fetchComedyMovies}/> 
      <Row title={"Horror Movies"}  fetchUrl={requests.fetchHorrorMovies}/> 
      <Row title={"Romance Movie"}  fetchUrl={requests.fetchRomanceMovie}/> 
      <Row title={"Documentries"}  fetchUrl={requests.fetchDocumentaries}/> 
    </div>
  );
}

export default App;
