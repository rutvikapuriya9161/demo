import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
function App() {
  let data =
  [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ]


  return (
    <div>
      <table border="1">
        <tr>
          <th>name</th>
          <th>age</th>
          <th>salary</th>
          <th>bonus</th>
          <th>status</th>
        </tr>
        {
          data.map((d,i) => {
            return(
            <tr>
              <td>{d.name}</td>
              <td>{d.age}</td>
              <td>{d.salary}</td>
              <td>{d.bonus}</td>
              <td>{d.status.toString()}</td>
            </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
