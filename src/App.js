// import logo from './logo.svg';
import { useState } from 'react';
import { Alert } from './components/Alert';
import './App.css';
// import { About } from './components/About';
import { Navbar } from './components/Navbar';
import {TextForm} from  './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')  // Wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
         setAlert(null);
      }, 1500);
  }
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor =  '#07105c';
      showAlert('Dark mode has enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor =  'white';
      showAlert('Light mode has enabled','primary');
    }
  }
  return (
      <>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        <div className="container">
        {/* <About/> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        </div>
      </>
  );
}
export default App;