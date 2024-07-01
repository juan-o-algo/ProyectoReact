import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const [cartCount, setCartCount] = useState(3)
  return (
    <>
      <NavBar cartCount={cartCount} />
      <h1>Frutería Perséfone</h1>
      <ItemListContainer greetings="Bienvenido!" />
      <Banana nombre="Banana" precio="$83/kg" stock="Hay en stock" imagen="/banana.jpg" />
      <Manzana nombre="Manzana" precio="$109/kg" stock="Hay en stock" imagen="/manzana.jpg" />
      <Durazno nombre="Durazno" precio="$175/kg" stock="Hay en stock" imagen="/durazno.jpg" />

    </>
  )
}

function Banana(props) {
  return (
    <>
      <hr />
      <h2>{props.nombre}</h2>
      <h3>{props.precio}</h3>
      <img src={props.imagen} height="200px" width="auto"></img>
      <h3>{props.stock}</h3>
      <button className="btn btn-primary">Comprar</button>
      <hr />
    </>
  )
}

function Manzana(props) {
  return (
    <>
      <h2>{props.nombre}</h2>
      <h3>{props.precio}</h3>
      <img src={props.imagen} height="200px" width="auto"></img>
      <h3>{props.stock}</h3>
      <button className="btn btn-primary">Comprar</button>
      <hr />
    </>);
}

function Durazno(props) {
  return (
    <>
      <h2>{props.nombre}</h2>
      <h3>{props.precio}</h3>
      <img src={props.imagen} height="200px" width="auto"></img>
      <h3>{props.stock}</h3>
      <button className="btn btn-primary">Comprar</button>
      <hr />
    </>
  );
}

export default App
