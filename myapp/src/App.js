import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
function App() {
  
  const myObj = {
    name: "John",
    age: 30,
    cars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat"
    }
  }

  for (let k in myObj) {
    if (k === 'cars') {
      for (let j in myObj[k]) {
        console.log(myObj[k][j]);
      }
    } else {
      console.log(myObj[k]);
    }
  }


  return (
    <Demo />
  );
}

export default App;
