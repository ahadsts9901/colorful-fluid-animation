import "./main.css"
import { useEffect } from "react"
import { bootstrap } from "./main"

const Fluid = () => {

    useEffect(() => {
        bootstrap()
    }, [])

    return <canvas id="fluid"></canvas>
}

export default Fluid