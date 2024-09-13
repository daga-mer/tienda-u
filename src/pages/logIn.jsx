import { useEffect, useState } from "react"
import NavBarComponent from "../components/navBarComponent"
import { Button, FormGroup, Input, Label } from "reactstrap"
import { useNavigate } from "react-router"

export default function Login() {
    let [cart, setCart] = useState([])
    let [email, setEmail] = useState([])
    let [password, setPassword] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        if (cart != null && cart.length === 0) {
            setCart(JSON.parse(localStorage.getItem('cart')))
        }
    }, [cart])


    return (
        <div className="App">
            <header className="App-header">
                <NavBarComponent cart={cart} setCart={setCart} />
            </header>
            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input style={{ width: "20rem" }} onChange={(e) => {
                        setEmail(e.target.value)
                    }} value={email}
                        id="exampleEmail"
                        name="email"
                        placeholder="Ingresa tu nombre de usuario"
                        type="email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input style={{ width: "20rem" }} onChange={(e) => {
                        setPassword(e.target.value)
                    }} value={password}
                        id="examplePassword"
                        name="password"
                        placeholder="Ingresa tu contraseña"
                        type="password"
                    />
                </FormGroup>

                <Button onClick={() => {
                    localStorage.setItem("email", email)
                    navigate("/")
                }} color="primary">
                    Iniciar Sesión
                </Button>
            </div>
        </div>
    )
}