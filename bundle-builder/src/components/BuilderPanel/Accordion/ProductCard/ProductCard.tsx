import { useState } from 'react'
import type { Product } from '../../../../types/productType'
import QuantityToggles from '../../../QuantitySteppers/QuantitySteppers'
import { useCartStore } from '../../../../store/cartStore'
import { getQuantityLimits } from '../../../../utils/quantity'

interface ProductCardProps {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    const [selectedVariantId, setSelectedVariantId] = useState(product.variants?.[0]?.id)

    const quantity = useCartStore(
        (state) =>
            state.items.find(
                (item) => item.productId === product.id && item.variantId === selectedVariantId,
            )?.quantity ?? 0,
    )
    const incrementQuantity = useCartStore((state) => state.incrementQuantity)
    const decrementQuantity = useCartStore((state) => state.decrementQuantity)

    const activeVariant = product.variants?.find((variant) => variant.id === selectedVariantId)
    const image = activeVariant?.image ?? product.image
    const finalPrice = product.discountedPrice ?? product.price
    const { canIncrement, canDecrement } = getQuantityLimits(product, quantity)

    return (
        <div
            className={`border-2 transition-colors duration-300 ease-in-out ${quantity > 0 ? 'border-primary' : 'border-transparent'
                } flex flex-col justify-center gap-4.75 bg-white px-2.75 py-3.75 rounded-[10px] w-57.25  lg:w-[361.5px] lg:flex-row lg:items-center lg:py-2.75`}
        >

            {/* Product Image */}
            <div className="relative w-[202.6px] h-[117.39px] lg:w-25 lg:h-37.75">

                {product.discountBadge && (
                    <span className="bg-primary rounded-[10px] py-0.5 px-1.5 text-white
                font-semiBold text-[12px] absolute top-0 bottom-0 h-fit">{product.discountBadge}</span>
                )}
                {image ? (
                    <img src={image} className="w-full h-full object-contain" alt={product.title} />
                ) : (
                    product.icon && (
                        <div className="w-full h-full flex items-center justify-center">
                            <i className={`${product.icon} text-[48px]`} />
                        </div>
                    )
                )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-2.5 w-full lg:flex-1 lg:min-w-0">
                <div className="flex flex-col gap-2.5 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <h4 className="text-[18px] font-semibold">{product.title}</h4>
                        {product.description && (
                            <p className="text-[14px] w-full text-text-secondary-75">
                                {product.description}{' '}
                                {product.learnMoreUrl && (
                                    <a href={product.learnMoreUrl} className="text-learn-more underline">Learn More</a>
                                )}
                            </p>
                        )}
                    </div>
                </div>

                {
                    product.variants && (
                        <div className="flex gap-1.5 flex-wrap">
                            {
                                product.variants.map((variant) => (
                                    <button
                                        type="button"
                                        key={variant.id}
                                        onClick={() => setSelectedVariantId(variant.id)}
                                        className={`flex items-center rounded-xs border py-px px-0.75 cursor-pointer ${variant.id === selectedVariantId ? 'border-selected-variant-border bg-selected-variant-bg' : 'border-border-light'
                                            }`}
                                    >
                                        <img src={variant.image} alt="" className="w-7 h-7" />
                                        <span className="text-[10px] font-medium text-text-secondary">{variant.name}</span>
                                    </button>
                                ))
                            }
                        </div>
                    )
                }


                <div className="flex justify-between">
                    <QuantityToggles
                        variant="builder"
                        quantity={quantity}
                        onIncrement={() => incrementQuantity(product.id, selectedVariantId)}
                        onDecrement={() => decrementQuantity(product.id, selectedVariantId)}
                        incrementDisabled={!canIncrement}
                        decrementDisabled={!canDecrement}
                    />

                    <div className="flex gap-0.75 lg:flex-col">
                        {product.discountedPrice !== undefined && (
                            <span className="line-through text-text-red text-[16px]">${product.price.toFixed(2)}</span>
                        )}
                        <span className="text-[16px] text-text-grey">
                            {finalPrice === 0 ? 'FREE' : `$${finalPrice.toFixed(2)}`}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
