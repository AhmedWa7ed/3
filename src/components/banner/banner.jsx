import './banner.css';
import img from '../../assest/img/img-1.jpg'
function Banner (){
    return (
        <>
        <div className='main d-flex justify-content-center flex-sm-colmun align-center mt-4'>
            <div >
        <center><img src={img} alt="" /></center>
            
            </div>
        </div>
        </>
    )
}
export default Banner;