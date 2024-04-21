/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import Header from './components/Header';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


function Gambar(){
  return (<img src="https://static.league-world.com/dist/logo/lg.png" width="50"/>);
}
function Paragraf(){
  return (<p onClick={e =>{ alert('ok!')}}>Belajar React Demi NextJS, Wkwkwkw</p>);
}
function Perulangan(){
  const lists=['bambang','jono','mex'];
  return(
      <>
          <ul>
              {

                  lists.map((list) =>  (
                      <li key={list}>{list}</li>
                      ))
              }
          </ul>
      </>
  );
}
function Button(){
  const [likes, setLikes] = useState(0);

  function handleClick(){
      setLikes(likes + 1);
  }
  return(
      <>
      <button onClick={handleClick}>Like ({likes})</button>
      </>
  );
}
function App() {
  return(<>
    <Header />
    <Header author="Biar Jelek"/>
    <Gambar/>
    <Paragraf/>
    <Perulangan/>
    <Button/>
    
    </>);
}

export default App
