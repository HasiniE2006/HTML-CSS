//Example.js
import React from 'react';
function example(){
    return (
        <>
        <h1>This is Example Page</h1>
        <h2>Welcome</h2>
        </>
    );
}
export default example;
//App.js
import logo from './logo.svg';
import './App.css';
import Example from './Example';
function App() {
 return(
  <>
  <Example />
  </>
 )
}
export default App;
//App.css
h1{
    color: rgb(159, 25, 123);
}
h2{
    color: rgb(206, 192, 202);
}
