import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
function App() {
    
    const person = {
      name: "Amit",
      age: 25
  }

  console.log(person.name, person.age);

  return (
    <Demo />
  );
}

export default App;
