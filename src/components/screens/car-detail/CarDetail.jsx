import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CarItem from "../home/car-item/CarItem"
import { CarService } from "../../../services/car.service"
import { Link } from "react-router-dom"
import style from "./CarDateil.module.css"
const CarDetail = () => {
    const {id} = useParams()
    const [car, setCar] = useState({})
    useEffect(() => {
        if (!id) return
        const fetchData = async () => {
           const data = await CarService.getByid(id)
           console.log(data)
           setCar(data)
        }
        fetchData()
      }, [id])
    if (!car?.name) return <p>Loading...</p>  
    return <div>
        <Link className={style.CarDetail} to='/'>Back</Link>
        <CarItem car={car} />
    </div>
}
export default CarDetail