import { Button, Card, CardBody, Nav, NavItem, NavLink, UncontrolledCollapse } from "reactstrap";


export default function Menu() {

    return (
        <div>
            <Button
                color="primary"
                onClick={function noRefCheck() { }}
                style={{ marginBottom: '1rem' }}
                id="toggler"
            >
                Menu
            </Button>
            <UncontrolledCollapse toggler="#toggler">
                <Card>
                    <CardBody>
                        <Nav vertical style={{ marginTop: "1rem" }} card fill justified pills>
                            <NavItem>
                                <NavLink href="/">
                                    Vuelos
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    Hoteles
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    Paquetes
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    Vuelos Directos
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    Reservas
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    Check-in
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">
                                    Check-out
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
        </div>
    )
}