import '../../../assets/icons/quantity-icons/style.css'
import QuantityToggles from '../../QuantitySteppers/QuantitySteppers'
import type { Product } from '../../../types/productType'
import { useCartStore } from '../../../store/cartStore'
import { getQuantityLimits } from '../../../utils/quantity'

interface ItemReviewCardProps {
  product: Product
  variantId?: string
  quantity?: number
}

export default function ItemReviewCard({ product, variantId, quantity = 1 }: ItemReviewCardProps) {
  const incrementQuantity = useCartStore((state) => state.incrementQuantity)
  const decrementQuantity = useCartStore((state) => state.decrementQuantity)

  const variant = product.variants?.find((variant) => variant.id === variantId)
  const image = variant?.image ?? product.image
  const unitPrice = product.discountedPrice ?? product.price
  const hasDiscount = product.discountedPrice !== undefined
  const { canIncrement, canDecrement } = getQuantityLimits(product, quantity)

  return (
    <div className="flex gap-4 items-center">
      {/* Item details */}
      <div className="flex flex-1 items-center gap-3">
        {/* Item image */}
        <div className="w-10.25 h-10.25 bg-white rounded-[5px]">
          <img className="w-full h-full" src={image} alt={product.title} />
        </div>

        {/* Item name */}
        <p className="text-[12px] flex-1 text-text-teriary font-medium">
          {product.title}{variant && ` - ${variant.name}`}
        </p>


        {/* Item quantity */}
        <QuantityToggles
          variant="review"
          quantity={quantity}
          onIncrement={() => incrementQuantity(product.id, variantId)}
          onDecrement={() => decrementQuantity(product.id, variantId)}
          incrementDisabled={!canIncrement}
          decrementDisabled={!canDecrement}
        />
      </div>

      {/* Item price */}
      <div className="flex flex-col justify-end">
        {hasDiscount && (
          <span className="font-medium text-[12px] text-old-price line-through">
            ${(product.price * quantity).toFixed(2)}
          </span>
        )}
        <span className="font-semibold text-[12px] text-primary">
          {unitPrice === 0 ? 'FREE' : `$${(unitPrice * quantity).toFixed(2)}`}
        </span>
      </div>
    </div>
  )
}
