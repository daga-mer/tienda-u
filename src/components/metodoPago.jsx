import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, Collapse, CardBody, CardFooter, FormGroup, Label, Input, CardHeader, Container, Row, Col, Spinner } from 'reactstrap';
import LogoPSE from "../Imgs/pse-seeklogo.svg";
import LogoMastercard from "../Imgs/mastercard-svgrepo-com.svg";
import LogoVisa from "../Imgs/visa-svgrepo-com.svg";
import { useNavigate } from 'react-router';

function MetodoPago(args) {
    const [modal, setModal] = useState(false);
    const [isOpenPSE, setIsOpenPSE] = useState(false);
    const [isOpenTarget, setIsOpenTarget] = useState(false);
    const [pagando, setPagando] = useState(false);
    const [pagado, setPagado] = useState(false);
    const navigate = useNavigate();
    
    //data PSE
    const [numDocumentPSE, setNumDocumentPSE] = useState("");
    const [tipoDocumentPSE, settipoDocumentPSE] = useState("");
    const [numTelPSE, setNumTelPSE] = useState("");
    const [passwordPSE, setPasswordPSE] = useState("");
    //data Card
    const [fechadevencimiento, setFechadevencimientoCard] = useState("");
    const [numTarjetaCard, setNumTarjetaCard] = useState("");
    const [numDocumentCard, setNumDocumentCard] = useState("");
    const [numCvvCard, setCvvCard] = useState("");
    const [numCuotasCard, setCuotasCard] = useState("");
    const [tipoDocumentCard, settipoDocumentCard] = useState("");
    const [numTelCard, setNumTelCard] = useState("");
    const [emailCard, setEmailCard] = useState("");

    const toggle = () => setModal(!modal);

    const togglePagoPSE = () => {
        setIsOpenTarget(false)
        setIsOpenPSE(!isOpenPSE)
    };
    const togglePagoTarget = () => {
        setIsOpenTarget(!isOpenTarget)
        setIsOpenPSE(false)
    };

    return (
        <div>
            <Button color="primary" onClick={toggle}>
                Pagar
            </Button>
            <Modal size='lg' isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>
                    Metodos de pago{" "}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-credit-card-fill" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1" />
                    </svg>
                </ModalHeader>
                <ModalBody style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                    <Card style={{ border: "none", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <img onClick={togglePagoPSE} style={{ "width": "6rem" }} src={LogoPSE} alt="LogoPSE" />
                        <img onClick={togglePagoTarget} style={{ "width": "6rem" }} src={LogoMastercard} alt="LogoMastercard" />
                        <img onClick={togglePagoTarget} style={{ "width": "6rem" }} src={LogoVisa} alt="LogoVisa" />
                    </Card>
                    <br/>
                    <Collapse isOpen={isOpenPSE} {...args}>
                        <Card>
                            <CardHeader style={{ display: "flex", justifyContent: "center" }}>
                                Pago por PSE
                            </CardHeader>
                            <CardBody>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Tipo de Documento
                                    </Label>
                                    <Input value={tipoDocumentPSE} onChange={(e) => settipoDocumentPSE(e.target.value)} id="exampleSelect" name="select" type="select">
                                        <option>
                                            Cedula de ciudadania
                                        </option>
                                        <option>
                                            Cedula de extranjeria
                                        </option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="numDoc">
                                        Numero de Documento
                                    </Label>
                                    <Input value={numDocumentPSE} onChange={(e) => setNumDocumentPSE(e.target.value)} id="numDoc" name="numDoc" type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="numTel">
                                        Numero de Telefono
                                    </Label>
                                    <Input value={numTelPSE} onChange={(e) => setNumTelPSE(e.target.value)} id="numTel" name="numDoc" type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Contraseña
                                    </Label>
                                    <Input value={passwordPSE} onChange={(e) => setPasswordPSE(e.target.value)} id="examplePassword" name="password" type="password" />
                                </FormGroup>
                            </CardBody>
                            <CardFooter style={{ display: "flex", justifyContent: "center" }}>
                                <Button onClick={() => {
                                    setPagando(true)
                                    setPagado(false)

                                    setTimeout(() => {
                                        setPagando(false)
                                        setPagado(true)
                                        setTimeout(() => {
                                            toggle()
                                            localStorage.clear()
                                            navigate("/")
                                        }, 2000);
                                    }, 5000);
                                }} color={pagado ? "success" : 'primary'}>
                                    {pagando ? <Spinner> Loading... </Spinner> : 
                                    pagado ? "Pagado" : "Pagar"}
                                </Button>
                            </CardFooter>
                        </Card>
                    </Collapse>
                    <Collapse isOpen={isOpenTarget} {...args}>
                        <Card>
                            <CardHeader style={{ display: "flex", justifyContent: "center" }}>
                                Pago por Tarjeta
                            </CardHeader>
                            <CardBody>
                                <h6>Datos de la tarjeta</h6>
                                
                                <hr/>

                                <Container>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="Fechadevencimiento">
                                                    Fecha de vencimiento
                                                </Label>
                                                <Input value={fechadevencimiento} onChange={(e) => setFechadevencimientoCard(e.target.value)} 
                                                id="Fechadevencimiento" name="Fechadevencimiento" type="date" />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="numTarjeta">
                                                    Numero de la tarjeta
                                                </Label>
                                                <Input value={numTarjetaCard} onChange={(e) => setNumTarjetaCard(e.target.value)}
                                                 id="numTarjeta" name="numTarjeta" type="number" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="cvv">
                                                    CVV
                                                </Label>
                                                <Input value={numCvvCard} onChange={(e) => setCvvCard(e.target.value)} id="cvv" name="cvv" type="number" />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="cuotas">
                                                    Cuotas
                                                </Label>
                                                <Input value={numCuotasCard} onChange={(e) => setCuotasCard(e.target.value)} id="cuotas" name="cuotas" type="number" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Container>
                                
                                <h6>Datos del propietario</h6>
                                
                                <hr/>

                                <Container>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="exampleEmail">
                                                    Tipo de Documento
                                                </Label>
                                                <Input value={tipoDocumentCard} onChange={(e) => settipoDocumentCard(e.target.value)} id="exampleSelect" name="select" type="select">
                                                    <option>
                                                        Cedula de ciudadania
                                                    </option>
                                                    <option>
                                                        Cedula de extranjeria
                                                    </option>
                                                </Input>
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="numDoc">
                                                    Numero de Documento
                                                </Label>
                                                <Input value={numDocumentCard} onChange={(e) => setNumDocumentCard(e.target.value)} id="numDoc" name="numDoc" type="number" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <Label for="numTel">
                                                    Numero de Telefono
                                                </Label>
                                                <Input value={numTelCard} onChange={(e) => setNumTelCard(e.target.value)} id="numTel" name="numDoc" type="number" />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <Label for="correo">
                                                    Correo Electronico
                                                </Label>
                                                <Input value={emailCard} onChange={(e) => setEmailCard(e.target.value)} id="correo" name="correo" type="email" />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Container>
                            </CardBody>

                            <CardFooter style={{ display: "flex", justifyContent: "center" }}>
                                <Button onClick={() => {
                                    setPagando(true)
                                    setPagado(false)

                                    setTimeout(() => {
                                        setPagando(false)
                                        setPagado(true)
                                        setTimeout(() => {
                                            toggle()
                                            localStorage.clear()
                                            navigate("/")
                                        }, 2000);
                                    }, 5000);
                                }} color={pagado ? "success" : 'primary'}>
                                    {pagando ? <Spinner> Loading... </Spinner> : 
                                    pagado ? "Pagado" : "Pagar"}
                                </Button>
                            </CardFooter>
                        </Card>
                    </Collapse>
                </ModalBody>
                <ModalFooter style={{ "display": "flex", "flexDirection": "row", "justifyContent": "space-around" }}>
                    <Button color="secondary" onClick={toggle}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default MetodoPago;