import type { Cart, CartSummary } from '../types/cartType'
import { productsById } from '../data/productsData'

export function getCartSummary(cart: Cart): CartSummary {
    return cart.items.reduce<CartSummary>(
        (summary, item) => {
            const product = productsById.get(item.productId)
            if (!product) return summary

            const quantity = item.quantity ?? 1
            const unitPrice = product.price
            const unitTotal = product.discountedPrice ?? product.price

            return {
                subtotal: summary.subtotal + unitPrice * quantity,
                total: summary.total + unitTotal * quantity,
                totalSaved: summary.totalSaved + (unitPrice - unitTotal) * quantity,
            }
        },
        { subtotal: 0, total: 0, totalSaved: 0 },
    )
}
