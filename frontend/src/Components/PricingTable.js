import React from 'react';

class PricingTable extends React.PureComponent {

    render() {
        return (
            <div class="pricing-table table1">
                <div class="pricing-header">
                    <div class="pricing-price"><span>$</span>19</div>
                    <div class="pricing-title">Basic</div>
                </div>
                <ul class="pricing-list">
                    <li><strong>20GB</strong> Storage</li>
                    <div class="pricing-border"></div>
                    <li><strong>4</strong> Email Address</li>
                    <div class="pricing-border"></div>
                    <li><strong>1</strong> Domain Name</li>
                    <div class="pricing-border"></div>
                    <li><strong>24h</strong> Support</li>
                </ul>
                <a href="#">Order Now</a>
            </div>
        );
    }
}

export default PricingTable;