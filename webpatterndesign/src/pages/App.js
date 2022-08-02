import { Provider } from 'react-redux';
import { Routers, store } from '../config';
import './App.css';

function App() {
  return (
    //provider ini diguankan untuk membungkus seleuruh aplikasi kita dan store akan berisi state global kita
    <Provider store={store}>
      <Routers/>
    </Provider>
  );
}

export default App;
