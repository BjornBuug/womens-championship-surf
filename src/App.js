import React,{useState} from 'react'
import Champions from './Components/Champions'
import Surfers from './Data/Surfers'
import Countries from './Components/Countries'

const allCountries =['all', ...new Set(Surfers.map((surfer)=> surfer.country))];


function App() {
const [champions, setChampions] = useState(Surfers)
const [countries, setCountries] = useState(allCountries)

const filterChampions = (country) => {
  if(country === 'all') {
    setChampions(Surfers);
    return;
  }
    const newSurfer = Surfers.filter((surfer)=> surfer.country === country)
    setChampions(newSurfer);
    
}

  return (
    <main>
    <section className="menu section">
      <div className="title">
        <h2>Women's Championship Tour</h2>
        
      </div>
      <Countries countries={countries} filterChampions={filterChampions}/>
      <Champions champions={champions}/>
    </section>
    </main>
  )
}

export default App;
