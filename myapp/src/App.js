import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
function App() {

  const person = [
    {
        name: "Amit",
        age: 25,
    },
    {
        name: "Piyush",
        age: 40,
    },


  ];

  person.map((p) => console.log(p.name, p.age));

  return (
    <Demo />
  );
}

export default App;
