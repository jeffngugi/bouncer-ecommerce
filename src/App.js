import {BrowserRouter as Router} from 'react-router-dom'
import  Routes from './components/Routes'
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    // <div>
    //   Jeff ngugi
    // </div>
    <Router>
        <Navbar />
        <Routes />
    </Router>
  );
}

export default App;
