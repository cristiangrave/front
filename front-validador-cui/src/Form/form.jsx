import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
function Formulario() {
    return (
        <>
         <Container fluid >
         <Row className="justify-content-center"> 
            <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Cui</InputGroup.Text>
            <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
          </InputGroup> 
          <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
        </Col>
          </Row>
          </Container>
        </>
      );
}

export default Formulario;