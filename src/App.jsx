
import axios from 'axios'
import { useEffect, useState } from 'react'
import Weather from './components/Weather'
import Loader from './components/Loader'
import Loading from './components/Loading'
import './App.css'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()


  //se ejecuta la funcion succes aqui y se declara una variable pos en la cual guardamos la latitud y longitud
  const success = (pos) => {
    const currentCoords = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    }
    setCoords(currentCoords)
  }
  //al estar vacio el [] se carga el useEffect y desde el primer render pide pregunta si aceptas la localizacion y ejecutamos la funcion success
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)

  }, [])


  //en este efecto hacemos que dependa de coords lo pongo dentro de []
  useEffect(() => {
    if (coords) {

      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=d8af59d241dcdbaa7036845048058d46`

      axios.get(URL)
        .then((res) => {
          setWeather(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * (9 / 5) + 32).toFixed(1)
          const newTemps = {
            celsius,
            farenheit
          }
          setTemp(newTemps)
         
        })
        .catch((err) => console.log(err))
    }
  }, [coords])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const query = e.target.textSearch.value
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=d8af59d241dcdbaa7036845048058d46`


    if (coords) {


      axios.get(URL)
        .then((res) => {
          setWeather(res.data)
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * (9 / 5) + 32).toFixed(1)
          const newTemps = {
            celsius,
            farenheit
          }
          setTemp(newTemps)
        })
        .catch((err) => console.log(err))
    }

  }


  return (
    <div >

      {
        loading ? (
          <Loading />
        ) : (
          <div className=" grid place-content-center min-h-screen bg-[url(/images/bg1.jpg)] bg-cover px-2">
            <form onSubmit={handleSubmit} className='flex justify-center gap-2 py-4'>
              <input id='textSearch' placeholder='Buscar el clima en otra ciudad' className='placeholder-black w-60 bg-slate-300/30 border-[1px] border-black rounded-md p-2 sm:w-[350px] sm:text-[22px] sm:placeholder-gray-600' type="text" />
              <button className='bg-red-950 font-bold p-2 text-white rounded-md sm:text-[20px]'>Search</button>

            </form>
           { weather ? (
            <Weather weather={weather} temp={temp} />
            ) : (
            <Loader />
            )
}
          </div>

        )
      }

    </div>


  )
}
export default App
