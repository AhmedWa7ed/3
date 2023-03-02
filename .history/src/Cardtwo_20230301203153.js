import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import wet from './assest/img/wesham.jpg'

import Col from 'react-bootstrap/Col';
import arsenal from './assest/img/arsenal.png'

function CardTow() {
  return (

    <Container >
    
      <Row style={{width: "50%"}}>
        <Col xs={{ order: 'last' }}>
   
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