import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import wet from './assest/img/wesham.jpg'

import Col from 'react-bootstrap/Col';
import arsenal from './assest/img/arsenal.png'

function OrderingFirstLastExample() {
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
        <Col xs> 
      
        <div className='cont'>
        <span className=''>3,24</span>
        </div>
        </Col>ouo
        
        <Col xs={{ order: 'first' }}> 
        
  <div className='d-flex justify-content-between ' style={{width: "150px"}}>
        <img style={{ width: '50px', }} src={arsenal} alt="" />
        <h3 className='text-light  '   >ارسنال</h3>
        </div>

        </Col>poi
        
        <Col xs> 
      
        <div className='cont'>
        <span className=''>3,24</span>
        </div>
        </Col>
      </Row>
      
    </Container>
  );
}

export default OrderingFirstLastExample;