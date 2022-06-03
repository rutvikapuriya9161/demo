import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
function App() {
  
  const person = {
    name: "Amit",
    age: 25,
    course: [
      "C",
      "HTML"
    ]
  }

  for (let k in person)
    if (k === 'course') {
      person[k].map((p) => console.log(p));
    } else {
      console.log(person[k]);
    }

  return (
    <Demo />
  );
}

export default App;
