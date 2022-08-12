import { Routes, Route, Link } from "react-router-dom";
import './App.css';

const Home = () => <h1>HOME</h1>;

const SearchPage = () => {
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ]
  return(
    <div>
        <h1>SEARCH PAGE</h1>
        {tacos.map( (taco)=>{ return(
          <Link key={taco} to={`/tacos/${taco}`}>Tacos</Link>
        )})}
    </div>
  )
}

const Tacos = () =>{
  return (
    <div>
        soy Tacos deliciosos
    </div>
  )
}
  
// UN COMPONENTE ES DIFERENTE A UN ELEMENTO:
// un componente fabrica a los elementos, la funcion es el componente, ejemplo: 
// Home, SearchPage
function App() {
  return (
    <div className="App">
      <header>
          <h1>Sebas App</h1>
          <nav>
            <ul>
              <li><Link to="/search-page">Search page</Link></li>
              <li><Link to="/home">Home</Link></li>
            </ul>
          </nav>
      </header>
     <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/tacos/:nombre-del-taco" element={<Tacos />} />
     </Routes>
     
    </div>
  );
}

export default App;
