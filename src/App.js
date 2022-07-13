// import logo from './logo.svg';
import './App.css';
let name= "Aysha";
function App() {
  return (
      <>
        <nav>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
        </nav>
        <div className="container">
           <h1>Hello {name}</h1>
           <p>Loreum ipsum loreum ipsum loreum ipsume loreum ipsum
           Loreum ipsum loreum ipsum loreum ipsume loreum ipsum
           Loreum ipsum loreum ipsum loreum ipsume loreum ipsum
           </p>
        </div>
      </>
  );
}
export default App;