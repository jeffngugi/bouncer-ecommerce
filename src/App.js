import {BrowserRouter as Router} from 'react-router-dom'
import  Routes from './components/Routes'
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import store from './store' 
import {Provider} from 'react-redux'

function App() {
  return (
   
    <Provider store={store}>
    <Router>
        <Navbar />
        <Routes />
        <Footer />
    </Router>
    </Provider>
  );
}

export default App;
