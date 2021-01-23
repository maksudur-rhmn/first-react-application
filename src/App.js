import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ['Shafique', 'Rafique', 'Tafique', 'Mafique', 'notun', 'aro notun']

  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$80.99'},
    {name: 'PDF Reader', price: '$40.99'},
    {name: 'Adobe XD', price: '249.99'}
  ]

  const productNames = products.map(product => product.name)
  console.log(productNames)
  return (
    <div className="App">
      <header className="App-header">
        
        <Users />
        <Counter />

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product products={product} />)
        }
        <Person name="Sagol" profession="bekar"/>
        <Person name="Pagol" profession="mental occurance"/>
        <Person name="Shiplu" profession="boisha thaka"/>
      </header>
    </div>
  );
}

function Users()
{
  const [users, setUsers] = useState([])

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res  => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h4>Dynamic users : {users.length}</h4>
      <ul>
        {
          users.map(user => <li>{user.name} | <span>{user.address.street}</span> </li>)
        }
      </ul>
    </div>
  )
}

function Counter()
{
  const [count, setCount] = useState(10)
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={ () => setCount(count - 1) }> <strong> - </strong> </button>
      <button onClick={() => setCount(count + 1)}> <strong> + </strong> </button>
    </div>
  )
}
function Person(props)
{

  const personStyle = {
    border : '2px solid gold',
    width  : '400px',
    margin : '10px',
    padding: '10px' 
  }
  return (
    <div style={personStyle}>
      <h3>My name : {props.name}</h3>
      <p>My profession : {props.profession}</p>
    </div>
  )
}

function Product(props)
{
  const productStyle = {
    border: '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgray',
    width: '300px',
    height: '300px',
    float : 'left',
  }
  const {name, price} = props.products
  return(
      <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}

export default App;
