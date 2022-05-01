import React  from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from "react"
import getGifs from "./services/getGifs"

const App = () => {
  const [gifs, setGIF] = useState([])
  useEffect(() => {
      getGifs().then(gifs => setGIF(gifs))
        
       }, [])
  return (
    <div className="App">
    <section>
    
    {
      gifs.map((singleGif) => { 
        return (
          <div id={singleGif.id}>
          <h4>{singleGif.title}</h4>
          
          <img src={singleGif.url} alt="gif" />
          
          </div>
          ) })
    }
    
    </section>
    </div>
  );
}
export default App;