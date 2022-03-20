import logo from './logo.svg';
import './App.css';
const number = 888;
const singer = {name: 'lala', job: 'singer'};
const singerStyle = {
  color: 'red',
  backgroundColor: 'white',
  padding: '10px'
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>JSX</h1>
        <p>number: {number}</p>
        <div className='container'>
          <h3>Hello react, how are you</h3>
        </div> 
        <div className="music">
          <p style={singerStyle}>Name : {singer.name} , job : {singer.job}</p>
        </div>

      </header>
    </div>
  );
}

export default App;
