import React from 'react';
import './Navbar2.css'


const Navbar2 = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navLogo col-md-2 pe-3">
                    <img src="https://deploy.com.bd/assets/uploads/logo.jpeg" alt="" />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <form className="navbar-form navbar-left p-2" role="search">
                            <input type="hidden" name="_csrf" value="1aa48974fa534da747e1cd8d4209de80" />
                            <div className="form-group d-flex">
                                <input type="text" className="form-control search-top me-3" placeholder="Search Product" name="search_text" />
                                <input className="btn btn-success" type="button" placeholder="Search Products" value="Search" />
                            </div>
                        </form>
                    </ul>
                    <div className="myCart p-2">
                        <i className="fa">&#xf07a;</i>
                        <span class='badge badge-warning p-1 rounded-full' id='lblCartCount'> 5 </span>
                        <button>My Cart</button>
                    </div>
                    <div className="userSection justify-between-content p-2">
                        <i class="fas fa-unlock-alt"></i>
                        <button>Login</button>
                    </div>
                    <div className="userSection justify-between-content p-2">
                        <button>Register</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar2;