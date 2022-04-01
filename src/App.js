
import './App.css';
import Countries from './comoponents/Countries/Countries';
import Header from './comoponents/Header/Header';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Countries></Countries>
    </div>
  );
}
// function Countries(){
//   // const [countries, setCountries] = useState([])
//   // useEffect(()=>{
//   //   fetch('https://restcountries.com/v2/all')
//   //   .then(res =>res.json())
//   //   .then(data =>setCountries(data));
//   // },[])
//   return(
//     <div>
//       {/* <h2>Traveling around the world!!!</h2>
//       <h4>Available country : {countries.length} </h4> */}
//     </div>
//   )
// }
export default App;
