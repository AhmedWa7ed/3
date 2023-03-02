import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import wet from './assest/img/wesham.jpg'

import Col from 'react-bootstrap/Col';
import arsenal from './assest/img/arsenal.png'

function CardTow() {
  return (
    <Container>
      <Row>
        <Col xs={{ order: 'last' }}>
        <div className='d-flex justify-content-between' style={{width: "150px"}}>
                           
        <h5 className='text-light ' style={{width: "150px"}}>واست هام</h5>
     <img style={{ width: '50px' }} src={wet} alt="" />
     
        </div>
        </Col>
        <Col xs> 
      
        <div className='cont'>
        <span className=''>3,24</span>
        </div>
        </Col>
        <Col xs> 
      
        <div className='cont'>
        <span className=''>3,24</span>
        </div>
        </Col>
        <Col xs={{ order: 'first' }}> 
        


        </Col>
      </Row>
    </Container>
  );
}

export default CardTow;