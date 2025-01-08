import '../styles/bootstrap5/src/css/bootstrap.min.css';
import '../styles/font-awesome/css/font-awesome.min.css';
import '../styles/bootstrap5/src/js/bootstrap.bundle.min.js';
import { Fragment } from 'react';
import Search from './Search.js';
import { Link } from 'react-router-dom';
import '../App.css';
function Header({cartItems})
{
    return(
        <>
        <Fragment>
            <nav className="navbar row bg-dark" id="navbar">
                <div className="col-12 col-md-3">
                    <a className="navbar-brand" href="#">
                        <Link to="/">
                            <img src="/images/logo.png" alt="logo" width="150px"/>
                        </Link>
                    </a>
                </div>
                <div className="col-12 col-md-6">
                    <Search />
                </div>
                <div className="col-12 col-md-3 text-center">
                    <Link to={"/cart"} id="cart_details">
                        <span className="text-light text-center" id="cart">
                            Cart
                        </span>
                        <span className="text-dark p-2 pt-1 pb-1" id="cart_count">
                            {cartItems.length}
                        </span>
                    </Link>
                </div>
            </nav>
        </Fragment>
        </>
    );
}
export default Header;