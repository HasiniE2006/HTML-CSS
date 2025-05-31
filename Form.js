//App.js
import logo from './logo.svg';
import './App.css';
function App() {
 return(
  <>
  <form>
    <input type='text' placeholder='Your First Name'/><br></br>
    <input type='text' placeholder='Your Last Name'/><br></br>
    <input type='password' placeholder='Enter Password'/><br></br>
    <input type='password' placeholder='Confirm Password'/><br></br>
    Gender:<br></br>
    Male: <input type='radio' name='a'/><br></br>
    Female:<input type='radio' name='a'/>
  </form>
  </>
 );
}
export default App;
