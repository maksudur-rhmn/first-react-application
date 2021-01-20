import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$80.99'},
    {name: 'PDF Reader', price: '$40.99'},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Product products={products[0]}/>
        <Product products={products[1]}/>
        <Product products={products[2]}/>
        <Person name="Sagol" profession="bekar"/>
        <Person name="Pagol" profession="mental occurance"/>
        <Person name="Shiplu" profession="boisha thaka"/>
      </header>
    </div>
  );
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
