import './Content.css'
import React, { useState } from 'react';

export default function PricingPlans () {
    const [paymentPlan, setPaymentPlan] = useState('annually');
    let tariffsList = [
        {
            name:"Starter",
            price:"9",
            period:"per month",
            discount:"Save 10% annually"
        },
        {
            name:"Core",
            price:"18",
            period:"per month",
            discount:"Save 10% annually"
        },
        {
            name:"Pro",
            price:"35",
            period:"per month",
            discount:"Save 13% annually"
        },
    ]

    let featuresCosts =[
        {
            title:"Number of member areas",
            starter:"1",
            core:"3",
            pro:"10"
        },
        {
            title:"Transaction fee",
            starter:"7%",
            core:"4%",
            pro:"1%"
        },
        {
            title:"Unlimited members",
            starter:"+",
            core:"+",
            pro:"+"
        },
        {
            title:"No ads or Squarespace branding",
            starter:"+",
            core:"+",
            pro:"+"
        },
        {
            title:"Offer discounts and promotions",
            starter:"+",
            core:"+",
            pro:"+"
        },
    ]

    let featuresList = [
        {
            title:"Free, one-time, or recurring fee structure",
        }, 
        {
            title:"Seamless and secure member experience",
        },
        {
            title:"Member management",
        },
        {
            title:"Integrated analytics",
        },
    ]
    return (
        <div className='pricing_wrapp'>
            <div className="pricing_title">
                <p className='pricing_title_big'>Pricing plans</p>
                <p className='pricing_title_small'>Pricing below is in addition to Squarespace website plans.</p>
            </div>
            <div className="tariffs">
                <div className="tariffs_btns">
                    <label style={{ color: paymentPlan === 'annually' ? 'black' : 'gray' }}>
                        <input 
                            type="radio" 
                            value="annually" 
                            checked={paymentPlan === 'annually'} 
                            onChange={() => setPaymentPlan('annually')} 
                        />
                        Pay Annually
                    </label>
                    <label style={{ color: paymentPlan === 'monthly' ? 'black' : 'gray' }}>
                        <input 
                            type="radio" 
                            value="monthly" 
                            checked={paymentPlan === 'monthly'} 
                            onChange={() => setPaymentPlan('monthly')} 
                        />
                        Pay Monthly
                    </label>   
                </div>
                <div className="tariffs_lists">
                {tariffsList.map((tariff) => {
                    return (
                        <div className="tariff_card">
                            <p className="tariff_name">{ tariff.name }</p>
                            <p className="tariff_pice">{ tariff.price }</p>
                            <p className="tarif_period">{ tariff.period }</p>
                            <p className="tarif_discount">{ tariff.discount }</p>
                        </div> 
                    ) ;
                })}
            </div>
            </div>
            <div className="features_costs">
                <p className='features_costs_txt'>features</p>
            {featuresCosts.map((tariff) => {
                return (
                    <div className='features_costs_card'>
                        <p className="tariff_card_title">{ tariff.title }</p>
                        <p className="tariff_card_starter">{ tariff.starter }</p>
                        <p className="tariff_card_core">{ tariff.core }</p>
                        <p className="tariff_card_pro">{ tariff.pro }</p> 
                    </div> 
                ) ;
            })}
            </div>
            <div className='features_list_wrapp'>
                <div className='features_list_title'>
                    Features included with all plans
                </div>
                <div className="features_list">
                    {featuresList.map((txt) => {
                        return (
                            <div className="">
                                <p className="features_list_txt">{ txt.title }</p>
                                
                            </div> 
                        ) ;
                    })}
                </div>
            </div>
        </div>
    )

}
/* .features_list_txt::before {
    content: "✔";
    margin-right: 5px;
} */