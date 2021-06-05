import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"


function App() {
 
  
var [quote, setQuote] = useState({
  text: "",
  author: ""
})
function findQuote(){
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  console.log(data[0])
setQuote(data[Math.floor(Math.random() * 1000)])
  });
}
useEffect(() => {
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  
setQuote(data[Math.floor(Math.random() * 1000)])
  });
}, [])

  return (
    <div className="App">
      <div id="quote-box"> 
    <h1 id="text">{quote.text}</h1>
    <h1 id="author">- {quote.author}</h1> 
    <button id="new-quote" onClick={() => findQuote()}>New quote</button>
    <a href={`https://twitter.com/intent/tweet?text=${quote.text}-${quote.author}`} id="tweet-quote" >Tweet quote</a>
    </div>

    </div>
  );
}

export default App;
