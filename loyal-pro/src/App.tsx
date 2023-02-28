import React from 'react';
import './styles/App.module.sass';
import {Header} from "./components/HeaderComponent/Header";
import {Main} from "./components/MainComponent/Main";

function App() {
  return (
    <div>
        <Header/>
        <Main/>
    </div>
  );
}

export default App;
