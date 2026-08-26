import React from 'react'
import Accordion from '../../components/Accordion/Accordion'
import Review from '../../components/Review/Review'

export default function BundleBuilderPage() {
    return (
        <div className="flex flex-col gap-0 lg:flex-row sm:gap-[29px]
        md:py-[49px] lg:justify-center">
            <h1 className="sm:hidden text-secondary text-center font-bold px-[21px] pb-[20px] pt-[31px] text-[31.8px]">Let's get started!</h1>
            <Accordion />
            <Review />
        </div>
    )
}
