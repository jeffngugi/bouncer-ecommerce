import {BrowserRouter as Router} from 'react-router-dom'
import  Routes from './components/Routes'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    // <div>
    //   Jeff ngugi
    // </div>
    <Router>
        <Navbar />
        <Routes />
        <Footer />
    </Router>
  );
}

export default App;
