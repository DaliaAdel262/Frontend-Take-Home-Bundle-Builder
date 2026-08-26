import React from 'react'

export default function QuantityToggles() {
    return (
        <div className="flex py-1 gap-[12px] items-center">
            <div className="flex items-center rounded-sm bg-white py-[5.2px]  px-[6px]">
                <i className="icon-minus text-[8px]" />
            </div>

            <span className="text-[14px] font-semibold">1</span>

            <div className="flex items-center rounded-sm bg-white py-[5.2px]  px-[6px]">
                <i className="icon-add text-[8px]" />
            </div>
        </div>
    )
}
