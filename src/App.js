// import logo from './logo.svg';
import './App.css';
import { About } from './components/About';
import { Navbar } from './components/Navbar';
// import {TextForm} from  './components/TextForm';

function App() {
  return (
      <>
        <Navbar title="TextUtils" aboutText="About Us" />

        <div className="container">
        <About/>
          {/* <TextForm heading="Enter the text to analyze"/> */}

        </div>
      </>
  );
}
export default App;