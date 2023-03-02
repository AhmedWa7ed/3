import './search.css'
function Search() {
    return (
        <center>
        <div className="search_parent">
            <div className='d-flex justify-content-center  mt-4'>
                <div >
                    <input dir='rtl' className='input' placeholder="ابحث عن ألعاب" type="text" />
                    {/* <svg style={{color:'#acacac'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi ico bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg> */}</div>
            </div>
        </div></center>
    )
}
export default Search;