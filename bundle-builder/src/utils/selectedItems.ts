import type { CartItem } from '../types/cartType'
import type { ProductCategory } from '../types/productType'
import { productsById } from '../data/productsData'

// Function resturns no of distinct products selected in a category
export function getSelectedCount(items: CartItem[], category: ProductCategory): number {
    const productIds = items
        .filter((item) => productsById.get(item.productId)?.category === category)
        .map((item) => item.productId)

    return new Set(productIds).size
}
