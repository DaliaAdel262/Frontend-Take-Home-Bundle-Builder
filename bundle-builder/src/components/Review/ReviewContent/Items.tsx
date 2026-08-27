import ItemReviewCard from './ItemReviewCard'
import type { CartItem } from '../../../types/cartType'
import type { ProductCategory } from '../../../types/productType'
import { productsById } from '../../../data/productsData'

interface ItemsProps {
    items: CartItem[]
}

const categoryLabels: Record<Exclude<ProductCategory, 'plan'>, string> = {
    camera: 'Cameras',
    sensor: 'Sensors',
    accessory: 'Accessories',
}

function groupItemsByCategory(items: CartItem[]) {
    const groups = new Map<ProductCategory, CartItem[]>()

    for (const item of items) {
        const category = productsById.get(item.productId)?.category
        if (!category || category === 'plan') continue

        const group = groups.get(category) ?? []
        group.push(item)
        groups.set(category, group)
    }

    return groups
}

export default function Items({ items }: ItemsProps) {
    const groupedItems = groupItemsByCategory(items)

    return (
        <>
            {Array.from(groupedItems.entries()).map(([category, categoryItems]) => (
                <div key={category} className="flex flex-col gap-2 pt-3.75 border-t border-border-light">
                    {/* Item Category */}
                    <h4 className="font-normal text-[12px] line-height-[16px] text-text-span">
                        {categoryLabels[category as Exclude<ProductCategory, 'plan'>].toUpperCase()}
                    </h4>

                    {/* Item List */}
                    <div className="flex flex-col gap-3">
                        {categoryItems.map((item) => {
                            const product = productsById.get(item.productId)
                            if (!product) return null

                            return (
                                <ItemReviewCard
                                    key={`${item.productId}-${item.variantId ?? 'default'}`}
                                    product={product}
                                    variantId={item.variantId}
                                    quantity={item.quantity}
                                />
                            )
                        })}
                    </div>
                </div>
            ))}
        </>
    )
}
