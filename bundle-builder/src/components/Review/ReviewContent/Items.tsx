import React from 'react'
import ItemReviewCard from './ItemReviewCard'

export default function Items() {
    return (
        <div className="flex flex-col gap-[8px] pt-[15px] border-t border-border-light">
            {/* Item Category */}
            <h4 className="font-normal text-[12px] line-height-[16px] text-text-span">CAMERAS</h4>

            {/* Item List */}
            <div className="flex flex-col gap-[12px]">
                <ItemReviewCard />
            </div>

            {/* Home monitoring plan */}


            {/* Shipping */}

            {/* Total price */}
        </div>
    )
}
