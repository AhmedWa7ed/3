import './assest/css/bootstrap.min.css'
import Comp from './components/nav/Nav';
import Search from './components/search/search'
import img from './assest/img/img-1.jpg'
import './components/banner/banner.css';
import liver from './assest/img/liverpool.png'
import bvb from './assest/img/bvb.png'
import wet from './assest/img/wesham.jpg'
import leag from './assest/img/pre-lea.jpg'
import Dropdown from 'react-bootstrap/Dropdown';
import arsenal from './assest/img/arsenal.png'
import { Row } from 'react-bootstrap';
import Cardimg from './CardImg';
function App() {
  return (
    <>
      <Comp />
      <Search />
      <div className='main d-flex justify-content-center  align-center p-3 mt-4 rounded-3'>

        <div className='img_will-done mt-4 rounded-3'>



          <div className='row d-flex justify-content-center rounded-3'>
            <img className=' rounded-3' src={img} alt="" />

          </div>
        </div>
      </div>
      <div className='p-3'>
        <center>

          <div className='direct p-3 mt-4'>

            <div className='rigt'>
              <div>مباشر</div>
            </div>

            <div className='row d-flex justify-content-center'>
              <div className='card col-md-6 col-sm-4 col-12  p-3 mb-2'>
                <div className='right'>
                  <div className='dirc '>
                    <div>مباشر</div>
                  </div>
                </div>
                <div className='d-flex justify-content-center mt-3 '>
                  {/* ====================================================== */}
                  <div className='imgInRow'>
                    {/* img-1 */}
                    <img style={{ width: '50px', }} src={liver} alt="" />
                  </div>
                  {/* vs text */}
                  <div className='text-light fw-bold fs-4 text-center mx-3 mt-4 vs'>Vs</div>
                  {/* img-2 */}
                  <div className='imgInRow'>
                    <img style={{ width: '50px' }} src={bvb} alt="" />
                  </div>
                  {/* ====================================================== */}


                </div>
                {/* ====================================================== */}
                <div className='mt-2'>
                  <div style={{ float: 'right' }} className="text">
                    63°الشوط الاول
                  </div>
                </div>
                {/* ====================================================== */}
                <div dir='rtl'>
                  <div class="progress mt-2">
                    <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                {/* ====================================================== */}
                <div>

                  <div dir='rtl' className='d-flex justify-content-between mt-2 text-light'>
                    <div>ليفربول</div>
                    <div>4</div>
                  </div>
                  <div dir='rtl' className='d-flex justify-content-between mt-2 text-light'>
                    <div>ليفربول</div>
                    <div>4</div>
                  </div>
                </div>
                {/* ====================================================== */}
                <div className='d-flex mt-2 mb-2'>
                  <div className='btn2'>1,75</div>
                  <div className='btn2 mx-3'>1,75</div>
                  <div className='btn2'>1,75</div>
                </div>
              </div>
              {/* ==================================================================== */}
              <div className='card col-md-6 col-sm-4 col-12  p-3 mx-3 mb-2'>
                <div className='right'>
                  <div className='dirc '>
                    <div>مباشر</div>
                  </div>
                </div>
                <div className='d-flex justify-content-center mt-3 '>
                  {/* ====================================================== */}
                  <div className='imgInRow'>
                    {/* img-1 */}
                    <img style={{ width: '50px', }} src={liver} alt="" />
                  </div>
                  {/* vs text */}
                  <div className='text-light fw-bold fs-4 text-center mx-3 mt-4 vs'>Vs</div>
                  {/* img-2 */}
                  <div className='imgInRow'>
                    <img style={{ width: '50px' }} src={bvb} alt="" />
                  </div>
                  {/* ====================================================== */}


                </div>
                {/* ====================================================== */}
                <div className='mt-2'>
                  <div style={{ float: 'right' }} className="text">
                    63°الشوط الاول
                  </div>
                </div>
                {/* ====================================================== */}
                <div dir='rtl'>
                  <div class="progress mt-2">
                    <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                {/* ====================================================== */}
                <div>

                  <div dir='rtl' className='d-flex justify-content-between mt-2 text-light'>
                    <div>ليفربول</div>
                    <div>4</div>
                  </div>
                  <div dir='rtl' className='d-flex justify-content-between mt-2 text-light'>
                    <div>ليفربول</div>
                    <div>4</div>
                  </div>
                </div>
                {/* ====================================================== */}
                <div className='d-flex mt-2 mb-2'>
                  <div className='btn2'>1,75</div>
                  <div className='btn2 mx-3'>1,75</div>
                  <div className='btn2'>1,75</div>
                </div>
              </div>
              {/* ====================================================== */}
              <div className='card col-md-6 col-sm-4 col-12  p-3 mb-2 '>
                <div className='right'>
                  <div className='dirc '>
                    <div>مباشر</div>
                  </div>
                </div>
                <div className='d-flex justify-content-center mt-3 '>
                  {/* ====================================================== */}
                  <div className='imgInRow'>
                    {/* img-1 */}
                    <img style={{ width: '50px', }} src={liver} alt="" />
                  </div>
                  {/* vs text */}
                  <div className='text-light fw-bold fs-4 text-center mx-3 mt-4 vs'>Vs</div>
                  {/* img-2 */}
                  <div className='imgInRow'>
                    <img style={{ width: '50px' }} src={bvb} alt="" />
                  </div>
                  {/* ====================================================== */}


                </div>
                {/* ====================================================== */}
                <div className='mt-2'>
                  <div style={{ float: 'right' }} className="text">
                    63°الشوط الاول
                  </div>
                </div>
                {/* ====================================================== */}
                <div dir='rtl'>
                  <div class="progress mt-2">
                    <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                {/* ====================================================== */}
                <div>

                  <div dir='rtl' className='d-flex justify-content-between mt-2 text-light'>
                    <div>ليفربول</div>
                    <div>4</div>
                  </div>
                  <div dir='rtl' className='d-flex justify-content-between mt-2 text-light'>
                    <div>ليفربول</div>
                    <div>4</div>
                  </div>
                </div>
                {/* ====================================================== */}
                <div className='d-flex mt-2 mb-2'>
                  <div className='btn2'>1,75</div>
                  <div className='btn2 mx-3'>1,75</div>
                  <div className='btn2'>1,75</div>
                </div>
              </div>
            </div>
          </div>
          {/* commit-fuck U^^ */}
          <div className='direct mt-4 p-3 container row'>
            <div dir='rtl'>
              <div className='d-flex justify-content-between'>
                <div className='d-flex'>{/* text-img */}
                  <div><img style={{ borderRadius: '100%', width: '50px', height: '50px' }} src={leag} alt="" /></div>
                  <div className='text-light fs-5 fw-bold me-2 mt-2'>الدوري الانجليزي الممتاز</div>
                </div>
                <div>{/* drop-dowen */}
                  <Dropdown >
                    <Dropdown.Toggle style={{ backgroundColor: '#656565', outline: 'none', border: 'none' }} className="mx-2" id="dropdown-basic">
                      اليوم
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">الكل</Dropdown.Item>
                      <hr />
                      <Dropdown.Item href="#/action-2">الاحد</Dropdown.Item>
                      <hr />
                      <Dropdown.Item href="#/action-3">الاثنين </Dropdown.Item>
                      <hr />
                      <Dropdown.Item href="#/action-1">الثلاثاء</Dropdown.Item>
                      <hr />
                      <Dropdown.Item href="#/action-2">الاربعاء</Dropdown.Item>
                      <hr />
                      <Dropdown.Item href="#/action-3">الخميس</Dropdown.Item>
                      <hr />
                      <Dropdown.Item href="#/action-3">الجمعة</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                
              </div>
              
              <div className='d-flex text-light mt-5'>
                <div>

          
                
                </div>
              </div>
            </div>
            <div>
            </div>

            <div className='direct mt-4 p-3 border border-ligh '>
            <div dir='rtl'>
          
                 {/* box1  */}
                 
            {/* الدوؤي الانجليزي copy*/}
            {/* الدوؤي الانجليزي copy*/}

<div className='row'>
<div className='col-lg-6 col-sm-12 d-flex justify-content-between mt-2'>
<div className='d-flex'>{/* text-img */}
<div>
<div className='cont '>
<span className=''>213+</span>
</div>
</div>
</div>

<div className='d-flex justify-content-between ' style={{width: "150px"}}>
<img style={{ width: '50px', }} src={arsenal} alt="" />
<h3 className='text-light  '   >ارسنال</h3>
</div>
  {/* box2  */}
              <div>
              <div className='cont '>
              <span className=''>2,52</span>
              </div>
              </div>
          {/* box3  */}
                        <div>
                        <div className='cont '>
                        <span className=''>1,40</span>
                        </div>
                        </div>

</div>
<div className='col-lg-6 col-sm-12 d-flex justify-content-between mt-2'>
            
                   {/* box 4  */}
                   <div>
                   <div className='cont '>
                   <span className=''>3,24</span>
                   </div>
                   </div>
                      {/* Arsenal 4  */}
                   <div className='d-flex'>{/* drop-dowen */}
         
                   <div className='d-flex justify-content-between' style={{width: "150px"}}>
                 
                    <h5 className='text-light ' style={{width: "150px"}}>واست هام</h5>
                 <img style={{ width: '50px' }} src={wet} alt="" />
                 
                    </div>
                   </div>
               
          {/* box1 Data */}
          <div>
          <h5 className='text-light '>   18:15PM</h5>
          <span className='text-light '>Mon</span>
          </div>
</div>

            {/* الدوؤي الانجليزي copy*/}
            {/* الدوؤي الانجليزي copy*/}
            
              </div>
             
           
              
            </div>
            <div>
            </div>
          </div> 
          <span className='mt-3 ' style={{border: "solid 1px white"}}></span>
                      {/* الدوؤي الانجليزي copy*/}
                      {/* الدوؤي الانجليزي copy*/}
         
                    
                    <div className='direct mt-4 p-3 border border-ligh '>
                    <div dir='rtl'>
                  
                         {/* box1  */}
                         
                    {/* الدوؤي الانجليزي copy*/}
                    {/* الدوؤي الانجليزي copy*/}
        

                     
                   
                      
                    </div>
                    <div>
                    </div>
                  </div>
          </div>
                         <Cardimg />

        </center>
        
      </div>

    </>
  );
}

export default App;
