
import { useState } from 'react';
import './App.css';

function App() {
  /*const nayoks = ['Rubel', 'Taskin', 'Bappa', 'salman', 'mojumdur'];
  const products = [
    {name : 'Lenovo', price: 3000},
    {name : 'Apple', price: 15000},
    {name : 'samsung', price: 12000},
    {name : 'htc', price: 6000},
  ];*/
  return (
    <div className="App">
      <Counter></Counter>



      {/*{
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {nayoks.map(nayok => <Person name={nayok}></Person>)}
      <Person name={nayoks[0]} job="cricketer"></Person>
      <Person name={nayoks[1]}  job="cricketer"></Person>
      <Person name={nayoks[2]}  job="Hero"></Person>
      <Person></Person>
      <h1>New component</h1>
      <Friend></Friend>
      <Friend></Friend>*/}
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(55);
  const increaseCount = () =>setCount(count + 1);
  const decreaseCount = () =>setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button type='submit' onClick={increaseCount}>Increase</button>
      <button type='submit' onClick={decreaseCount}>Decrease</button>
    </div>
  );
}

/*function Product(props){
  return(
    <div className='product'>
      <h1>Brand: {props.name}</h1>
      <p>price: {props.price}</p>
    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.job}</p>
    </div>
  );
}

function Friend() {
  return (
    <div className='container'>
      <h3>Name: Ajay dev</h3>
      <p>Job: Maramari</p>
    </div>
  );
}*/

export default App;
