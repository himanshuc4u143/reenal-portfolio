import 'bootstrap/dist/css/bootstrap.min.css'
// import logo from './logo.svg';
import logo from './hlogo.png'
import './App.css';
import Navbar from './components/navbar';
import bgImg from './images/wallpaperflare.com_wallpaper.jpg'
//import Navbar1 from './components/Navbar1';

function App() {
  return (
    <div className="App" >
      <div className='nav'><Navbar></Navbar></div>
      <div className='content'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
