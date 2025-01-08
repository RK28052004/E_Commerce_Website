import '../styles/bootstrap5/src/css/bootstrap.min.css';
import '../styles/font-awesome/css/font-awesome.min.css';
import '../styles/bootstrap5/src/js/bootstrap.bundle.min.js';
import { Fragment } from 'react';
import '../App.css';
function Footer()
{
    return(
        <>
        <Fragment>
            <footer className="bg-dark py-1 mt-5" id="footer">
                <p className="text-light mt-3">
                    JVLcart - 2023-2024, All Rights Reserved
                </p>
            </footer>
        </Fragment>
        </>
    )
}
export default Footer;