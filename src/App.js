// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import { About } from './components/About';
import { Navbar } from './components/Navbar';
import {TextForm} from  './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')  // Wheather dark mode is enabled or not

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor =  '#07105c';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor =  'white';
    }
  }
  return (
      <>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <div className="container">
        {/* <About/> */}
        <TextForm heading="Enter the text to analyze" mode={mode} />
        </div>
      </>
  );
}
export default App;