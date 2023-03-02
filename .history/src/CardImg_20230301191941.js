import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OrderingFirstLastExample() {
  return (
    <Container>
      <Row>
        <Col xs={{ order: 'last' }}>First, but last</Col>
        import arsenal from './assest/img/arsenal.png'
        <Col xs={{ order: 'first' }}>Third, but first</Col>
      </Row>
    </Container>
  );
}

export default OrderingFirstLastExample;