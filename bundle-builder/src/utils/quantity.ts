import type { Product } from '../types/productType'

export function getMinQuantity(product: Product | undefined): number {
    return product?.isRequired ? 1 : 0
}

export function getMaxQuantity(product: Product | undefined): number | undefined {
    if (!product) return undefined
    return product.isRequired ? 1 : product.maxQuantity
}

export function getQuantityLimits(product: Product, quantity: number) {
    const maxQuantity = getMaxQuantity(product)

    return {
        canIncrement: maxQuantity === undefined || quantity < maxQuantity,
        canDecrement: quantity > getMinQuantity(product),
    }
}
