import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function OrderingFirstLastExample() {
  return (
    <Container>
      <Row>
        <Col xs={{ order: 'last' }}>First, but last</Col>
        <Col xs> <div className='d-flex justify-content-between ' style={{width: "150px"}}>
        <img style={{ width: '50px', }} src={arsenal} alt="" />
        <h3 className='text-light  '   >ارسنال</h3>
        </div></Col>
        <Col xs={{ order: 'first' }}>Third, but first</Col>
      </Row>
    </Container>
  );
}

export default OrderingFirstLastExample;