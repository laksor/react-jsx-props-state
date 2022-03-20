
import './App.css';

function App() {
  const nayoks = ['Rubel', 'Taskin', 'Bappa', 'salman'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {/*<Person name={nayoks[0]} job="cricketer"></Person>
      <Person name={nayoks[1]}  job="cricketer"></Person>
      <Person name={nayoks[2]}  job="Hero"></Person>
    <Person></Person>*/}
      <h1>New component</h1>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
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
