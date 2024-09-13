import { useState } from "react";
import { Input } from "reactstrap";
import flights from "../data.json";



export default function Buscador({ cart, setCart }) {
    const [value, setValue] = useState("")
    const [filteredFlights, setFilteredFlights] = useState(flights);

    return <div>
        <Input type="text" value={value} placeholder="Ingrese el vuelo que desea buscar" onChange={(e) => {
            console.log(e.target.value)
            setValue(e.target.value)
            let flightSearch = e.target.value.toLowerCase()


            const filtered = flights.filter((flight) => {
                return (
                    flight.departure_city.toLowerCase().includes(flightSearch) ||
                    flight.arrival_city.toLowerCase().includes(flightSearch)
                );
            });
            console.log("filtered: ", filtered);

            setFilteredFlights(filtered);
        }} width={"12rem"} />
        <ul style={{ background: "#e5e5e5" }}>
            {value.length > 0 && filteredFlights.map((flight) => {
                console.log("flight map: ", flight);

                return (
                    <div style={{ "padding": "0.5rem 0.1rem" }}>
                        <li style={{ "list-style-type": "none", cursor: "pointer" }} onClick={() => {
                            if (cart && cart != null && !cart.includes(flight)) {
                                setCart([flight, ...cart])
                                localStorage.setItem("cart", JSON.stringify([flight, ...cart]))
                            } else if (cart == null) {
                                setCart([flight])
                                localStorage.setItem("cart", JSON.stringify([flight]))
                            }
                        }} key={flight.flight_number}>
                            {flight.departure_city} ({flight.departure_airport}) -  {flight.arrival_city} ({flight.arrival_airport})<br />
                        </li>
                        <hr style={{ width: "95%" }} />
                    </div>
                )
            })}
        </ul>
    </div>

}