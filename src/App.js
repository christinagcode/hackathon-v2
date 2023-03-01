import Navbar from './components/Navbar';
import BlogResults from './components/BlogResults';
import Footer from './components/Footer';
import Body from './components/Body'
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState('');

  const [newData, setnewData] = useState([]);
  console.log(input);

  useEffect(()=>{
    fetch(`http://hn.algolia.com/api/v1/search?query=${input}`).then(response => response.json()).then((data) => {
      // console.log(data, 'thisisdata');
      setnewData(data.hits);
    }) 
  }, [input])

  useEffect(()=>{
    console.log('input has updated', input)
  }, [input]);

  useEffect(()=>{
    console.log('data has updated', newData)
  }, [newData]);

  return (
    <div className="App">
    
      <Navbar input={input} setInput={setInput} />
      <Body />
      <Footer />
   
    </div>
  );
}

export default App;
