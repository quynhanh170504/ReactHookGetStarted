import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import SignUp from './components/SignUp';
import DisplayInfor from './components/DisplayInfor';
import MyComponent from './components/MyComponent';

const listUsers = [
  {
    id: '' + Math.floor(Math.random() * 10 + 2) + 2,
    username: 'Quynh Anh',
    email: 'huynhanh.170504@gmail.com'
  },
  {
    id: '' + Math.floor(Math.random() * 10 + 2) + 2,
    username: 'Arya',
    email: 'arya@gmail.com'
  },
  {
    id: '' + Math.floor(Math.random() * 10 + 2) + 2,
    username: 'Hmm',
    email: 'hmm@gmail.com'
  },
]

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <SignUp></SignUp> */}
      <MyComponent></MyComponent>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Increase</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
    //   </header>
    // </div>
  );
}

export default App;