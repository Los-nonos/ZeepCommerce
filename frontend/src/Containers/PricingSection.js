import React from 'react';
import PricingTable from '../Components/PricingTable';

class PricingSection extends React.Component{

    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div className='pricing-container'>
                <PricingTable></PricingTable>
                <PricingTable></PricingTable>
                <PricingTable></PricingTable>
            </div>
        )
    }
}

export default PricingSection;