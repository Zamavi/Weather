import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import "./index.css"
import MapComponent from "./components/mapComponent"; // Import the MapComponent



const App = () => {

  const [region, setRegion] = useState("andijan")
  const [temp, setTemp] = useState({})

  let API = `https://api.openweathermap.org/data/2.5/weather?q=${region}&appid=fbcb247a6de541232c57bc743f2a882d`


  const getData = () => {
    axios({
      method: "get",
      url: API
    })
      .then(res => {
        console.log(res.data)
        setTemp(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
    console.log("ok")
  }, [region])

  return (
    <div className="app">
      <div className="container">
        <h2>the weather forecast of some Capital cities</h2>
        <h1>{region}</h1>

        <div className="city">
          <button onClick={() => setRegion("washington")}>USA</button>
          <button onClick={() => setRegion("moscow")}>RUSSIA</button>
          <button onClick={() => setRegion("london")}>GREAT BRITAIN</button>
          <button onClick={() => setRegion("paris")}>FRANCE</button>
          <button onClick={() => setRegion("ottawa")}>CANADA</button>
          <button onClick={() => setRegion("seoul")}>SOUTH KOREA</button>
          <button onClick={() => setRegion("beijing")}>CHINA</button>
          <button onClick={() => setRegion("berlin")}>GERMANY</button>
          <button onClick={() => setRegion("tokyo")}>JAPAN</button>
          <button onClick={() => setRegion("rome")}>ITALY</button>
          <button onClick={() => setRegion("tashkent")}>UZBEKISTAN</button>
          <button onClick={() => setRegion("madrid")}>SPAIN</button>
          <button onClick={() => setRegion("dubai")}>UAE</button>
          <button onClick={() => setRegion("ankara")}>TURKIYE</button>
        </div>

        <div className="center">
          <h1>{ temp.sys?.country }</h1>
          <h1>{ temp.name }</h1>
          <h1>{ Math.round(temp.main?.temp - 273.15) } °C</h1>
          <h1>{ Math.round(temp.main?.feels_like - 273.15) } °C</h1>
        </div>



      </div>
    

         <div className="map" style={{ height: "500px", width: "100%" }}>
            <MapComponent /> {/* Add the MapComponent inside this div */}
         </div>
      </div>
  )
}

export default App
