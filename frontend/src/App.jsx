import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
function App() {
  const [jokes, setCount] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=> {
      // handle success
      setCount(response.data);
    })
    .catch((error) =>{
      console.log(error);
    })
  })
  return (
    <>
    
      <h1>chai and full stack</h1>
      <p>jokes: {jokes.length}</p>

      {
        jokes.map((joke,index) =>(
          <div key={joke.id}>
            <h2>{joke.title}</h2>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
