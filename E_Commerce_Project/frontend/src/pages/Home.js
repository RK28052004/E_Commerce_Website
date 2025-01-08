import '../styles/bootstrap5/src/css/bootstrap.min.css';
import '../styles/font-awesome/css/font-awesome.min.css';
import '../styles/bootstrap5/src/js/bootstrap.bundle.min.js';
import { Fragment, useEffect, useState } from 'react';
import '../App.css';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';
function Home()
{
    const [products,setProducts]=useState([]);
    const [searchParams,setSearchParams]=useSearchParams();
    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then(res=>res.json())
        .then(res=>setProducts(res.products))
    },[searchParams])
    return(
        <>
        <Fragment>
            <h1 id="product_heading" className="mt-5">
                Latest Posts
            </h1>
            <section className="container mt-5" id="products">
                <div className="row">
                    {products.map(product=><ProductCard product={product}/>)}
                </div>
            </section>
        </Fragment>
        </>
    );
}
export default Home;
{/* <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded h-100">
                            <img className="card-img-top container" src="./images/products/1.jpg" alt="Phone"/>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">
                                    <a href="#" id="product_description">
                                        OPPO F21s Pro 5G (Dawnlight Gold, 8GB RAM, 128 Storage) with No Cost EMI/Additional Exchange Offers
                                    </a>
                                </h5>
                                <div className="ratings mt-auto" id="ratings">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                </div>
                                <p className="card-text" id="amount">$245.67</p>
                                <a href="#" className="btn" id="view_details">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded h-100">
                            <img src="./images/products/2.jpg" className="card-img-top container" alt="Watch"/>
                            <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <a href="#" id="product_description">
                                    WRISTIO HD, Bluetooth Calling Smart Watch, 15 days battery life, Water Resistant
                                </a>
                            </h5>
                            <div className="ratings mt-auto" id="ratings">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                <span className="" id="reviews">(5 reviews)</span>
                            </div>
                            <p className="card-text" id="amount">$150.32</p>
                            <a href="#" className="btn" id="view_details">
                                View Details
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded h-100">
                            <img src="./images/products/3.jpg" className="card-img-top container" alt="Laptop"/>
                            <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <a href="#" id="product_description">
                                    Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB
                                </a>
                            </h5>
                            <div className="ratings mt-auto" id="ratings">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                <span className="" id="reviews">(5 reviews)</span>
                            </div>
                            <p className="card-text" id="amount">$440.57</p>
                            <a href="#" className="btn" id="view_details">
                                View Details
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded h-100">
                            <img src="./images/products/4.jpg" className="card-img-top container" alt="Neckband"/>
                            <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <a href="#" id="product_description">
                                    PTron Newly Launched Tangent Sports, 60Hrs Playtime
                                </a>
                            </h5>
                            <div className="ratings mt-auto" id="ratings">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                <span className="" id="reviews">(5 reviews)</span>
                            </div>
                            <p className="card-text" id="amount">$15.46</p>
                            <a href="#" className="btn" id="view_details">
                                View Details
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
                        <div className="card p-3 rounded h-100">
                            <img src="./images/products/5.jpg" className="card-img-top container" alt="Shoe"/>
                            <div className="card-body d-flex flex-column">
                            <h5 className="card-title">
                                <a href="#" id="product_description">
                                    Campus Men's Maxico Running Shoes
                                </a>
                            </h5>
                            <div className="ratings mt-auto" id="ratings">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                                <span className="" id="reviews">(5 reviews)</span>
                            </div>
                            <p className="card-text" id="amount">$10.12</p>
                            <a href="#" className="btn" id="view_details">
                                View Details
                            </a>
                            </div>
                        </div>
                    </div> */}