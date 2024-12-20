import { createRoot } from 'react-dom/client'
import './index.css'
import Formulario from './Form/form'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
createRoot(document.getElementById('root')).render(
  <>
  <Container fluid>
      <Row className="justify-content-md-center">
        <Col>< Formulario/></Col>
    </Row>
    </Container>
  </>,
)
