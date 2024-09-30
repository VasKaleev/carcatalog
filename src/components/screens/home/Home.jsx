import CarItem from "./car-item/CarItem.jsx"
import CreateCarForm from "./create-cart-form/CreateCarForm.jsx"
import { useState, useEffect } from "react"
import { CarService } from "../../../services/car.service.js"
import styles from './Home.module.css'
import VideoPlayer from "./Player.jsx"



function Home() {
  const [cars, setCars] = useState([])
  useEffect(()=> {
    const fetchData = async () =>{
      const data = await CarService.getAll()
      setCars(data)
    }
    fetchData()
  },[])

  return (
    <div>
      <h1>Cars catalog</h1>
      {/* <VideoPlayer /> */}
      <CreateCarForm setCars={setCars}/>
      <div>
        {cars.length ?
          cars.map(car=>(
          <CarItem key={car.id} car={car} />
        ))
         : <p>There are no Car</p>
      }
      </div>
    </div>
  )
}

export default Home