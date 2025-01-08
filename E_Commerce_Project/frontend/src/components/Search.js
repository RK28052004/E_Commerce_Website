import '../styles/bootstrap5/src/css/bootstrap.min.css';
import '../styles/font-awesome/css/font-awesome.min.css';
import '../styles/bootstrap5/src/js/bootstrap.bundle.min.js';
import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Search()
{
    const [keyword,setKeyword]=useState("");
    const navigate=useNavigate();
    const searchHandler=()=>{
        navigate('/search?keyword='+keyword)
    }
    return(
        <>
        <div className="input-group">
            <input type="text" className="form-control" id="search_field" placeholder="Enter Product Name...."
            onChange={(e)=>setKeyword(e.target.value)} onBlur={searchHandler}/>
            <button className="btn" id="search_btn" onClick={searchHandler}>
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
        </div>
        </>
    );
}
export default Search;