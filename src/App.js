import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const Products =[
    {name:"Racket",price:"$20"},
    {name:"CricketBat",price:"$25"},
    {name:"Football", price:"$7"}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>i am a react person</p>
        <Datashower>

  
        </Datashower>
        
        <ul>
        <Counter></Counter> 
    {Products.map(pd =><Product Product={pd}></Product>)}
          </ul>
         
      <PersonShower name ="Neetu" type ="fictional character" ></PersonShower> 
       <PersonShower name ="Dr.Neeyonto" type ="fictional character"></PersonShower>
     
      </header>
    </div>
  );
}
//how to load data from server
function Datashower(){
  const  [users ,setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data=>setUsers(data));
  })
  return (
  <div><h1>Data from backend:{users.length}</h1>
        <ul>
  {users.map(user=><li>{user.name}</li>)}
          </ul>

        
      </div>
  )
}
//how to use a state
function Counter(){
  const [count ,setCount] =useState(10);
  const handleButtons = () => setCount(count + 1)
  return (<div><h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrese</button>
  </div>)
}
//how to pass object...
function Product(props){
  const productStyles={
    border :"1px solid green",
    backgroundColor:"lightgray",
    height:"200px",
    width:"200px",
    margin:"20px",
    float:"left"
  }
const {name,price} =props.Product
  
  return (<div style={productStyles}>
    <h3>{name} </h3>
  <h2>{price}</h2>
    <button>Buy now</button>
    </div>)
}
//how to create components...similar in structre different in data....and pass data throuh component..
function PersonShower(props){
  var style ={
    border:"1px solid red",
    margin:"10px",
    padding:"20px",
    width:"500px"
   
  }
return (<div style={style}> <h1>Name:{props.name}</h1>
  <h3>Characteristics: {props.type}</h3></div>
);
}

export default App;
