import React from 'react';
import './App.css';
import { ImageCarousal } from './ImageCarousal';
import FAQ from './FAQ'
import QuesBox from './QuesBox';

function App() {
  return (
    <div className="App">
      <ImageCarousal/>
      <QuesBox/>
      <FAQ/>
      <h1 className='underline'>ok</h1>
      
    </div>
  );
}

export default App;
