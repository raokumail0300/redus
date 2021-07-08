import './App.css';
import { Provider } from 'react-redux';
import store from './store/index';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Provider store={store} >
       <Home />
      </Provider>
    </div>
  );
}

export default App;
