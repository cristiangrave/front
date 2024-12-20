import { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
function cuiIsValid(cui) {
    if (!cui) {
        console.log("CUI vacío");
        return true;
    }
    const cuiRegExp = /^[0-9]{4}\s?[0-9]{5}\s?[0-9]{4}$/;
    if (!cuiRegExp.test(cui)) {
        console.log("CUI con formato inválido");
        return false;
    }

    cui = cui.replace(/\s/, '');
    const depto = parseInt(cui.substring(9, 11), 10);
    const muni = parseInt(cui.substring(11, 13));
    const numero = cui.substring(0, 8);
    const verificador = parseInt(cui.substring(8, 9));

    const munisPorDepto = [17, 8, 16, 16, 13, 14, 19, 8, 24, 21, 9, 30, 32, 21, 8, 17, 14, 5, 11, 11, 7, 17];

    if (depto === 0 || muni === 0 || depto > munisPorDepto.length || muni > munisPorDepto[depto - 1]) {
        console.log("CUI con código de municipio o departamento inválido.");
        return false;
    }

    let total = 0;
    for (let i = 0; i < numero.length; i++) {
        total += numero[i] * (i + 2);
    }

    const modulo = total % 11;
    console.log("CUI con módulo: " + modulo);
    return modulo === verificador;
}

function Formulario() {
    const cuiRef = useRef(null);
    const [isValid, setIsValid] = useState(true);

    const handleKeyUp = (e) => {
        console.log("CUI: " + cuiRef.current.value);
            const input = e.target;
        const parent = input.parentElement;
        const next = input.nextElementSibling;
        const cui = input.value;
        if (cui && cuiIsValid(cui)) {
            parent.classList.add('has-success');
            next.classList.add('glyphicon-ok');
            parent.classList.remove('has-error');
            next.classList.remove('glyphicon-remove');
        } else if (cui) {
            parent.classList.add('has-error');
            next.classList.add('glyphicon-remove');
            parent.classList.remove('has-success');
            next.classList.remove('glyphicon-ok');
        } else {
            parent.classList.remove('has-error');
            next.classList.remove('glyphicon-remove');
            parent.classList.remove('has-success');
            next.classList.remove('glyphicon-ok');
        } 
        if (cui && cuiIsValid(cui)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <> 
         <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="justify-content-center">
                <Col md={6} className="d-flex flex-column align-items-center">
                    <h1>Validacion de CUI <small>utilizado en Guatemala</small></h1>
                    <p>El <strong>Codigo de Identificacion</strong> (CUI) es el numero con el que se identifican los ciudadados en Guatemala y se ecuentra impreso en su <strong>Documento Personal de Identificacion</strong> (DPI).</p>
                    <blockquote><p>El presente formulario permite <em>verificar si el CUI escrito es valido</em>, sin embargo la validez del numero no implica que exista un ciudadano que se identifique con dicho numero.</p></blockquote>
                    <FloatingLabel controlId="cui" label="Ingrese Cui" >
                        <Form.Control type="text" placeholder="Ingrese Cui" ref={cuiRef} onKeyUp={handleKeyUp}   className={isValid ? '' : 'is-invalid'}/>
                    </FloatingLabel>
                </Col>
            </Row>
        </Container>
    
        </>
    );
}

export default Formulario;