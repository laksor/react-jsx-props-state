
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h1>New component</h1>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className='person'>
      <h1>shakib al hasan</h1>
      <p>professon: cricketer</p>
    </div>
  )
}

function Friend() {
  return (
    <div className='container'>
      <h3>Name: Ajay dev</h3>
      <p>Job: Maramari</p>
    </div>
  )
}

export default App;
