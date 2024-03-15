import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumbers from './utils/getRandomNumbers.js'
import LocationCard from './components/LocationCard.jsx'
import ResidentCard from './components/ResidentCard.jsx'
import './index.css'


function App() {
  const locationId = getRandomNumbers(126)
  const [inputvalue, setInputvalue] = useState(locationId)
  const url = `https://rickandmortyapi.com/api/location/${inputvalue}`
  const [location, getLocation, hasError] = useFetch(url)

  useEffect(() => {
    getLocation()
  }, [inputvalue])

  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setInputvalue(inputLocation.current.value)
  }
  return (
    <div className='fondo'>
    <div className='portada'>
      <h1 className='title'>RICK AND MORTY</h1>
      <form onSubmit={handleSubmit}>
        <input className='btn1' ref={inputLocation} type="text" />
        <button className='boton'>Search</button>
      </form>
      {
        hasError
          ? <h2 className='error'>Hey! 👎you must provide and id form 1 to 126😢😎</h2>

          : (
            <>
              <LocationCard
                location={location}
              />
              <div className='resident_container'>
                {
                  location?.residents.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
            </>
          )
      }
    </div>
  </div>
  )
}

export default App
