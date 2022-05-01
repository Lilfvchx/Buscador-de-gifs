import React  from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from "react"
import Gifs from "./components/Gifs"
const GIFS = ["https://media0.giphy.com/media/88iYsvbegSUn9bSTF8/200w.webp?cid=ecf05e475a4qttl16vjkg7k1vjcsjjo0q1dvlempbphrzvk1&rid=200w.webp&ct=g", 
"https://media0.giphy.com/media/3oEjHI8WJv4x6UPDB6/200.webp?cid=ecf05e475a4qttl16vjkg7k1vjcsjjo0q1dvlempbphrzvk1&rid=200.webp&ct=g"]
const DIFFERENT_GIFS = ["https://media.giphy.com/media/6OKqprYYgabclgRBsb/giphy.gif"]
const App = () => {
  const [gifs, setGIF] = useState(GIFS)
  useEffect(() => {
    setGIF(DIFFERENT_GIFS)
  },[])
  return (
    <div className="App">
    <section>
    
    {
      gifs.map((singleGif) => { 
        return (<img src={singleGif} alt="gif" />) })
    }
    
    </section>
    </div>
  );
}
export default App;