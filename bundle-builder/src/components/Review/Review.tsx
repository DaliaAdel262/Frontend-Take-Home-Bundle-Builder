import React from 'react'
import ReviewContent from './ReviewContent/ReviewContent'

export default function review() {
    return (
        <div className='bg-review-bg px-[15px] py-[15px] flex flex-col
        gap-[5px] w-full lg:w-[399px] md:rounded-[10px]'>
            {/* Review Header */}
            <div className="flex">
                <span className="text-[10px] lg:text-[12px] text-text-teriary">REVIEW</span>
            </div>

            {/* Review Content */}
            <ReviewContent />

        </div>

    )
}
