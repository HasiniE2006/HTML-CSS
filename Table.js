//App.js
import logo from './logo.svg';
import './App.css';

function App() {
 return(
  <>
  <center><h1>Time Table</h1></center>
  <table border='1'cellPadding='10' cellSpacing='1' style={{textAlign:'center'}}>
    <tr>
      <th>Time</th>
      <th>9:30 AM to 10:30 AM</th>
      <th>10:30 AM to 11:30 AM</th>
      <th>11:30 AM to 11:45 AM</th>
      <th>11:45 AM to 12:00 AM</th>
      <th>12:00 Pm to 1:00 PM</th>
    </tr>
    <tr>
      <th>Monday</th>
      <td>Java</td>
      <td>Python</td>
      <td rowSpan={6} style={{backgroundColor:'pink'}}>
        B<br></br>
        R<br></br>
        E<br></br>
        A<br></br>
        K<br></br>
      </td>
      <td>HTML</td>
      <td>CSS</td>
    </tr>
    <tr>
      <th>Tuesday</th>
      <td>Python</td>
      <td>Java Scirpt</td>
      <td>CSS</td>
      <td>React JS</td>
    </tr>
    <tr>
      <th>wednesday</th>
      <td>Java</td>
      <td>Python</td>
      <td>HTML</td>
      <td>CSS</td>
    </tr>
    <tr>
      <th>Thursday</th>
      <td>Python</td>
      <td>Java Scirpt</td>
      <td>CSS</td>
      <td>React JS</td>
    </tr>
    <tr>
      <th>Friday</th>
      <td>Java</td>
      <td>Python</td>
      <td>HTML</td>
      <td>CSS</td>
    </tr>
    <tr>
      <th>Saturday</th>
      <td>Python</td>
      <td>Java Scirpt</td>
      <td>CSS</td>
      <td>React JS</td>
    </tr>
  </table>
  </>
 )
}
export default App;

//App.css
th{
    background-color: skyblue;
    color: rgb(18, 17, 18);
}
td{
    background-color: rgb(173, 179, 179);
}
