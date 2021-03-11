import './App.css';
import AddBookc from './components/addBook';
import BodyC from './components/body';
import HeaderC from './components/header';

function App() {
  return (
    <div className="App">
      <HeaderC></HeaderC>
      <AddBookc></AddBookc>
      <BodyC></BodyC>
    </div>  
  );
}

export default App;
