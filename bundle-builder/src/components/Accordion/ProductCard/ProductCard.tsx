import productImage from '../../../assets/images/products/wyze-cam-v4.png'
import QuantityToggles from '../../QuantitySteppers/QuantitySteppers'

export default function ProductCard() {
    return (
        <div className="flex flex-col justify-center lg:flex-row lg:items-center
         gap-[19px] py-[15px] px-[11px]
        border-2 border-primary rounded-[10px] w-[229px] lg:w-[361.5px] max-w-full">

            {/* Product Image */}
            <div className="relative w-[202.6px] h-[117.39px]">
                <span className="bg-primary rounded-[10px] py-[2px] px-[6px] text-white
            font-semiBold text-[12px] absolute top-0 bottom-0 h-fit">Save 22%</span>
                <img src={productImage} className="w-full h-full object-contain" alt="" />
            </div>

            <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[10px] w-full">
                    <div className="flex flex-col gap-[8px] w-full">
                        <h4 className="text-[18px] font-semibold">Wyze Cam v4</h4>
                        <p className="text-[14px] w-full">The clearest Wyze Cam ever made. Learn More</p>
                    </div>
                </div>

                <div className="flex gap-[6px] flex-wrap">
                    <div className="flex items-center rounded-[2px] border-1 py-[1px] px-[3px]">
                        <img src={productImage} alt="" className="w-[28px] h-[28px]" />
                        <span className="text-[10px] font-medium text-text-secondary">White</span>
                    </div>
                </div>

                <div className="flex justify-between">
                    <QuantityToggles />

                    <div className="flex gap-[3px] lg:flex-col">
                        <span className="line-through text-text-red text-[16px]">$35.98</span>
                        <span className="text-[16px] text-text-grey">$35.98</span>
                    </div>
                </div>
            </div>



        </div>
    )
}
