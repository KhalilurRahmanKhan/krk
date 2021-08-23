import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import "./Services.css";


const Services = () => {
    return (
        <div className="services" id="services">
            <h3>Services</h3>
            <PricingTable  highlightColor='#1E1E1E'>
               
                <PricingSlot   buttonText='SIGN UP' title='Basic' priceText='$50'>
                    <PricingDetail> <b>Web </b>design </PricingDetail>
                    <PricingDetail> <b>1-5</b> pages</PricingDetail>
                    <PricingDetail> <b>Upto 5 time</b> revision</PricingDetail>
                    <PricingDetail> <b>3 days</b></PricingDetail>
                  
                </PricingSlot>
                <PricingSlot   buttonText='SIGN UP' title='Professional' priceText='$100'>
                    <PricingDetail> <b>Web </b>design</PricingDetail>
                    <PricingDetail> <b>Upto 10</b> pages</PricingDetail>
                    <PricingDetail> <b>Unlimited</b> revision</PricingDetail>
                    <PricingDetail> <b>5 days</b></PricingDetail>
                </PricingSlot>
                <PricingSlot   buttonText='SIGN UP' title='ENTERPRISE' priceText='$200'>
                    <PricingDetail> <b>Web</b> development</PricingDetail>
                    <PricingDetail> <b>Upto 10</b> pages</PricingDetail>
                    <PricingDetail> <b>Unlimited</b> users</PricingDetail>
                    <PricingDetail> <b>10 days</b></PricingDetail>
                </PricingSlot>
            </PricingTable>
        </div>
    );
};

export default Services;