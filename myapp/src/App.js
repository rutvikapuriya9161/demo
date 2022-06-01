import logo from './logo.svg';
import './App.css';
import Demo from './Component/Demo';
function App() {
  let data =
  [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];

  let fData = data.filter((d,i) => d.status === true && d.expiry >= 2022);
  let ans = fData.reduce((acc, d, i) => acc + d.price ,0);
  console.log(ans);

  return (
    <div>
      <table border="1">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>quantity</th>
          <th>price</th>
          <th>expiry</th>
          <th>status</th>
          <th>totel price</th>
        </tr>
        {
          fData.map((d,i) => {
            let { id, name,quantity, price, expiry, status} = d;
            return(
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <td>{expiry}</td>
              <td>{status.toString()}</td>
              {i === 0 ? <td rowSpan={5}>{ans}</td> : null}
            </tr>
            )
          })
        }
      </table>
    </div>
  );
}

export default App;
