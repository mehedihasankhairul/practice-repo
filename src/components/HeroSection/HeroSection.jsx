import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-sectionTitle container">
                <h1 className="hero-title">
                    <span> Want Easy Stay </span>
                    <br />
                    <span> Karo QuickStay! </span>
                </h1>
                <div className="search-area p-5 row">
                    <div className="d-flex search-area-info text-center text-white  justify-content-center">
                        <div className="col-md-3 info-text">
                            <h2> 25000+</h2>
                            <p>Trusted Users</p>
                        </div>
                        <div className="col-md-3 info-text">
                            <h2> 4000+</h2>
                            <p>Verified Properties PAN India</p>
                        </div>
                        <div className="col-md-3 info-text">
                            <h2> 17.5+ Lakhs</h2>
                            <p>Total Brokerage Saved</p>
                        </div>
                    </div>
                    <div className="search-box d-flex">
                        <div className="selectpicker">
                            <select data-live-search="true">
                                <option data-tokens="Chandigarh">Chandigarh</option>
                                <option data-tokens="Unknown">Unknown</option>
                                <option data-tokens="Mumbai">Mumbai</option>
                                <option data-tokens="Delhi">Delhi</option>
                                <option data-tokens="Ghoa">Ghoa</option>
                            </select>
                        </div>
                        <div className="input-area d-flex justify-content-between">
                            <input type="text" className="input-box" placeholder="Search locality" />
                            <button>Search</button>
                        </div>
                    </div>
                </div>
                <div className="row py-5 justify-content-center">
                    <div className="box d-flex col-md-4 col-sm-6">
                        <p>Do you own a residential property? List it here...</p>
                        <span className="button">></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;