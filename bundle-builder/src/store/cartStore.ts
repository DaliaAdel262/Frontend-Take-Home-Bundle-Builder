import { create } from 'zustand'
import type { CartItem } from '../types/cartType'
import { cart as seedCart } from '../data/cartData'
import { productsById } from '../data/productsData'
import { saveSystem, loadSystem } from '../utils/saveSystem'
import { getMinQuantity, getMaxQuantity } from '../utils/quantity'

interface CartState {
    items: CartItem[]
    addItem: (productId: string, variantId?: string, quantity?: number) => void
    removeItem: (productId: string, variantId?: string) => void
    incrementQuantity: (productId: string, variantId?: string, amount?: number) => void
    decrementQuantity: (productId: string, variantId?: string, amount?: number) => void
    setQuantity: (productId: string, variantId: string | undefined, quantity: number) => void
    getQuantity: (productId: string, variantId?: string) => number
    clearCart: () => void
    saveForLater: () => boolean
}

function isSameProd(item: CartItem, productId: string, variantId?: string): boolean {
    return item.productId === productId && item.variantId === variantId
}

export const useCartStore = create<CartState>((set, get) => ({
    items: loadSystem() ?? seedCart.items,

    addItem: (productId, variantId, quantity = 1) => {
        set((state) => {
            const maxQuantity = getMaxQuantity(productsById.get(productId))
            const index = state.items.findIndex((item) => isSameProd(item, productId, variantId))

            if (index === -1) {
                const nextQuantity = maxQuantity !== undefined ? Math.min(quantity, maxQuantity) : quantity
                return { items: [...state.items, { productId, variantId, quantity: nextQuantity }] }
            }

            const items = [...state.items]
            const currentQuantity = items[index].quantity ?? 0
            const nextQuantity = currentQuantity + quantity
            items[index] = {
                ...items[index],
                quantity: maxQuantity !== undefined ? Math.min(nextQuantity, maxQuantity) : nextQuantity,
            }
            return { items }
        })
    },

    removeItem: (productId, variantId) => {
        set((state) => ({
            items: state.items.filter((item) => !isSameProd(item, productId, variantId)),
        }))
    },

    incrementQuantity: (productId, variantId, amount = 1) => {
        get().addItem(productId, variantId, amount)
    },

    decrementQuantity: (productId, variantId, amount = 1) => {
        const currentQty = get().getQuantity(productId, variantId)
        if (currentQty === 0) return

        const minQuantity = getMinQuantity(productsById.get(productId))
        const nextQty = Math.max(minQuantity, currentQty - amount)

        get().setQuantity(productId, variantId, nextQty)
    },

    setQuantity: (productId, variantId, quantity) => {
        if (quantity <= 0) {
            set((state) => ({
                items: state.items.filter((item) => !isSameProd(item, productId, variantId)),
            }))
            return
        }

        set((state) => ({
            items: state.items.map((item) =>
                isSameProd(item, productId, variantId) ? { ...item, quantity } : item
            ),
        }))
    },

    getQuantity: (productId, variantId) => {
        return get().items.find((item) => isSameProd(item, productId, variantId))?.quantity ?? 0
    },

    clearCart: () => set({ items: [] }),

    saveForLater: () => saveSystem(get().items),
}))