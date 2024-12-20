import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
function Formulario() {
    return (
        <>
           <h1>Validacion de CUI <small>utilizado en Guatemala</small></h1>
    <p>El <strong>Codigo de Identificacion</strong> (CUI) es el numero con el que se identifican los ciudadados en Guatemala y se ecuentra impreso en su <strong>Documento Personal de Identificacion</strong> (DPI).</p>
    <blockquote><p>El presente formulario permite <em>verificar si el CUI escrito es valido</em>, sin embargo la validez del numero no implica que exista un ciudadano que se identifique con dicho numero.</p></blockquote>
         <Container>
            <Row className="justify-content-center"> 
                <Col> 
                <FloatingLabel controlId="cui" label="Ingrese Cui" className="mb-3">
                     <Form.Control type="text" placeholder="Ingrese Cui" className='text-left'/>
                </FloatingLabel>
                </Col>
            </Row>
        </Container>
        </>
      );
}

export default Formulario;