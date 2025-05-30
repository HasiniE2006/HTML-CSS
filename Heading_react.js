//App.js
import logo from './logo.svg';
import './App.css';

function App() {
  const h={
    color:'skyblue',
    backgroundColor:'pink',
    border:'2px solid orange',
    padding:'20px',
    margin:'20px',
    borderRadius:'40px',
    width:'50%',
    textAlign:'center',
    borderwidth:'3px',
  }
 return(
  <div>
  <h1 style={h}>Hey</h1>
  <h2 style={h}>Guys</h2>
  <h3 style={h}>Welcome</h3>
  <h4 style={h}>to</h4>
  <div class="v">
  <h5> my youtube</h5>
  <a href='https://www.youtube.com' style={{paddingLeft:'15px'}}>Click</a>
  </div>
  <h6 style={{color:'red',background:'yellow'}}>channel</h6>
  </div>
 )
}

export default App;
//App.css
.v{
color:red;
border: 5px solid black;
background-color:aqua;
width: fit-content;
border-radius: 25px;
};
