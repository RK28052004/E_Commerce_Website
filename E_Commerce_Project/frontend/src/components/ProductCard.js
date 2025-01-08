import '../styles/bootstrap5/src/css/bootstrap.min.css';
import '../styles/font-awesome/css/font-awesome.min.css';
import '../styles/bootstrap5/src/js/bootstrap.bundle.min.js';
import '../App.css';
import { Link } from 'react-router-dom';
function ProductCard({product})
{
    return(
        <>
            <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                <div className="card p-3 rounded h-100">
                    <img className="card-img-top container" src={product.images[0].image} alt=""/>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                            <Link to={"/product/"+product._id} id="product_title">
                                {product.name}
                            </Link>
                        </h5>
                        {/* <p className="card-text" id="amount">
                        <a href="#" id="product_description">
                                {product.description}
                            </a>
                        </p> */}
                        <div className="ratings mt-auto" id="ratings">
                            {/* <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-half-o" aria-hidden="true"></i> */}
                            <div className="rating-outer">
                                <div className="rating-inner" style={{width:`${product.ratings/5*100}%`}}></div>
                            </div>
                        </div>
                        <p className="card-text" id="amount">
                            ${product.price}
                        </p>
                        <Link to={"/product/"+product._id} className="btn" id="view_details">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductCard;