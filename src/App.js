import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation';
import { Home } from '@mui/icons-material';
import HomePage from './customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation/>
      <div>
      <HomePage/>
      </div>
    </div>
  );
}

export default App;
