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
      </div>
    </div>
  );
}

export default App;
