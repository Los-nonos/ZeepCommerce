import React from 'react';

class Services extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="services-section">
                <div class="inner-width">
                    <h1 class="section-title">Our Services</h1>
                    <div class="border"></div>
                    <div class="services-container">

                        <div class="service-box">
                            <div class="service-icon">
                                <i class="fas fa-paint-brush"></i>
                            </div>
                            <div class="service-title">Web Designs</div>
                            <div class="service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
                            </div>
                        </div>

                        <div class="service-box">
                            <div class="service-icon">
                                <i class="fas fa-code"></i>
                            </div>
                            <div class="service-title">Web Development</div>
                            <div class="service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
                            </div>
                        </div>

                        <div class="service-box">
                            <div class="service-icon">
                                <i class="fas fa-brush"></i>
                            </div>
                            <div class="service-title">Responsive Designs</div>
                            <div class="service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
                            </div>
                        </div>

                        <div class="service-box">
                            <div class="service-icon">
                                <i class="fas fa-object-ungroup"></i>
                            </div>
                            <div class="service-title">Edit Sections</div>
                            <div class="service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
                            </div>
                        </div>

                        <div class="service-box">
                            <div class="service-icon">
                                <i class="fas fa-database"></i>
                            </div>
                            <div class="service-title">Databases</div>
                            <div class="service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
                            </div>
                        </div>

                        <div class="service-box">
                            <div class="service-icon">
                                <i class="fab fa-android"></i>
                            </div>
                            <div class="service-title">Android</div>
                            <div class="service-desc">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eaque ratione rem porro, nihil.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;