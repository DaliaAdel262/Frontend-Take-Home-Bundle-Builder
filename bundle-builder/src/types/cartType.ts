export interface CartItem {
    productId: string
    variantId?: string
    quantity?: number
}

export interface Cart {
    items: CartItem[]
}

export interface CartSummary {
    subtotal: number
    total: number
    totalSaved: number
}
