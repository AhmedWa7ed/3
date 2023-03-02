import logo from '../../assest/img/logo.png'
import '../../assest/css/main.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Comp() {
    return (
        <>
            <div style={{ backgroundColor: '#404040', width: '100%', height: 'auto' }} className="p-2" >
            <Navbar expand="lg">

        <Navbar.Brand href="#home"> <img  style={{height:'50px'}} src={logo}/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-light fs-5 fw-bold'>المراهانت الرياضية</Nav.Link>
            <Nav.Link href="#link" style={{color:'#979797'}} className="fs-5 fw-bold mx-2" >الرياضيات المباشرة</Nav.Link>
            <Nav.Link href="#link" style={{color:'#979797'}} className="fs-5 fw-bold mx-2" >سلوت </Nav.Link>
            <Nav.Link href="#link" style={{color:'#979797'}} className="fs-5 fw-bold mx-2" >تمبولا مباشر</Nav.Link>
            
          </Nav>
          <div className='btn btn-primary fs-4 fw-bold'>تسجيل دخول </div>
        </Navbar.Collapse>
    </Navbar>

            </div>
        </>
    )
}
export default Comp