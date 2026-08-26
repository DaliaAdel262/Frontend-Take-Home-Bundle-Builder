import productImage from '../../../assets/images/products/wyze-cam-floodlight-v2.png'
import '../../../assets/icons/quantity-icons/style.css'
import QuantityToggles from '../../QuantitySteppers/QuantitySteppers'

export default function ItemReviewCard() {
  return (
    <div className="flex gap-[16px]">
      {/* Item details */}
      <div className="flex flex-1 items-center justify-between">
        <div className="flex gap-[12px] items-center">
          {/* Item image */}
          <div className="w-[41px] h-[41px]">
            <img className="w-full h-full" src={productImage} alt="Wyze Cam v4" />
          </div>

          {/* Item name */}
          <p className="text-[12px] text-text-teriary font-medium">Wyze Cam v4</p>
        </div>

        {/* Item quantity */}
        <QuantityToggles />
      </div>

      {/* Item price */}
      <div className="flex flex-col">
        <span className="font-medium text-[12px] text-old-price line-through">$35.98</span>
        <span className="font-semibold text-[12px] text-primary">$27.98</span>
      </div>
    </div>
  )
}
