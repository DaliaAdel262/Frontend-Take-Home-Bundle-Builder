import React from 'react'
import Items from './Items'
import satisfactionBadge from '../../../assets/images/badges/satisfaction-badge.png'
import '../../../assets/icons/review-icons/style.css'

export default function ReviewContent() {
    return (
        <div className="flex flex-col px-[20px] pt-[20px] pb-[31px] gap-[10px]">
            {/* Header */}
            <div className="flex flex-col gap-[5px]">
                <h2 className="font-semibold text-[22px]">Your security system</h2>
                <h3 className="font-medium text-[12px] lg:text-[14px]">Review your personalized protection system designed to keep what matters most safe.</h3>
            </div>

            {/* Items Selected */}
            <Items />

            {/* Plan Chosen */}
            <div className="flex flex-col gap-[8px] pt-[15px] border-t border-border-light">
                {/* Item Category */}
                <h4 className="font-normal text-[12px] line-height-[16px] text-text-span">HOME MONITORING PLAN</h4>

                {/* Item List */}
                <div className="flex justify-between">
                    {/* Item name */}
                    <div className="flex gap-[3.85px] items-center">
                        <i className="icon-plan" />
                        <p className="text-[14px] text-black font-bold">Cam
                            <span className="text-primary"> Unlimited</span></p>
                    </div>

                    {/* Item price */}
                    <div className="flex flex-col">
                        <span className="font-medium text-[12px] text-old-price line-through">$35.98/mo</span>
                        <span className="font-semibold text-[12px] text-primary">$27.98/mo</span>
                    </div>
                </div>
            </div>

            {/* Shipping Cost */}
            <div className="flex flex-col gap-[8px] pt-[15px] border-t border-border-light">

                {/* Item List */}
                <div className="flex justify-between">
                    {/* Item name */}
                    <div className="flex items-center gap-[12px]">
                        <i className="icon-shipping text-[41px]" />
                        <p className="text-[12px] text-text-teriary font-medium">Fast Shipping</p>
                    </div>
                    {/* Item price */}
                    <div className="flex flex-col items-end">
                        <span className="font-medium text-[12px] text-old-price line-through">$35.98</span>
                        <span className="font-semibold text-[12px] text-primary">FREE</span>
                    </div>
                </div>
            </div>

            {/* Total Price */}
            <div className="flex flex-col gap-[8px]">
                <div className="flex flex-col gap-[4px]">
                    {/* price */}
                    <div className="flex justify-between">
                        <img className="w-[78px] h-[78px]" src={satisfactionBadge} alt="" />

                        <div className="flex items-end flex-col gap-[8px] py-[10px]">
                            <span className="bg-primary text-white text-[12px] font-medium py-[5px] px-[8px] rounded-[3px] w-auto">
                                as low as $19.19/mo
                            </span>

                            <div className="flex items-center gap-[8px]">
                                <p className="text-[18px] text-old-price font-medium line-through">$238.81</p>
                                <p className="text-primary font-bold text-[24px]">$187.89</p>
                            </div>


                        </div>
                    </div>

                    {/* checkout btn */}
                    <div className="flex flex-col pt-[10px] gap-[4px]">
                        <p className="text-text-green font-semibold text-[12px]">Congrats! You’re saving $50.92 on your security bundle!</p>
                        <button className="rounded-[4px] py-[13px] px-[16px] bg-primary text-white text-[17px] font-semibold">Checkout</button>
                    </div>

                </div>
                <button className="underline text-text-teriary italic text-[12px]">Save my system for later</button>
            </div>
        </div>
    )
}
