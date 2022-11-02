import './App.scss';
import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <div className='container'>
      <Header />
      <Home />
      <h1>Coffee Delivery</h1>
    </div>
  );
}

export default App;
