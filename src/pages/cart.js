import { useEffect, useState } from "react";
import NavBarComponent from "../components/navBarComponent";
import MetodoPago from "../components/metodoPago";


export default function Cart () {
    let [cart, setCart] = useState([])

    useEffect(() => {
      if (cart != null && cart.length === 0) {
        setCart(JSON.parse(localStorage.getItem('cart')))
      }
    }, [cart])
    let totalCost = 0

    return(
        <div className="App">
          <header className="App-header">
            <NavBarComponent cart={cart} setCart={setCart} />
          </header>
          <div className='container' style={{ textAlign: "center" }}>
            <h2>Tus Vuelos</h2>
            {cart.map(flight => {
                totalCost += flight.cost
                return (
                    <>
                        <div style={{ "padding": "0.5rem 0.1rem" }}>
                            <li style={{ "list-style-type": "none", cursor: "pointer", display: "flex", justifyContent: "space-between" }} key={flight.flight_number}>
                                <p>
                                    {flight.departure_city} ({flight.departure_airport}) -  {flight.arrival_city} ({flight.arrival_airport})
                                </p>
                                <p>
                                    {flight.cost} {flight.currency}
                                </p>
                            </li>
                            <hr />
                        </div>
                    </>
                )
            })}
            <div style={{ "padding": "0.5rem 0.1rem", display: "flex", justifyContent: "center", border: "1px solid black" }}>
                <b style={{"padding": "0rem 0.5rem"}}>Costo total: </b>{totalCost}
            </div>
            <br />
            <MetodoPago/>
          </div>
        </div>
    )
}