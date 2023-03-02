import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import arsenal from './assest/img/arsenal.png'
import { Card , } from 'react-bootstrap';

function GroupExample() {
  return (
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <div className='d-flex justify-content-between ' >
      <img  src={arsenal} alt="" />
      <h3 className='text-light  '   >ارسنال</h3>
      </div>
  );
}

export default GroupExample;