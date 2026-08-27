import type { CartItem } from '../types/cartType'
import { productsById } from '../data/productsData'

const KEY = 'saved-system'

// Function for saving system, returns true if successful
// otherwise returns false (to display error message to user)
export function saveSystem(items: CartItem[]): boolean {
  try {
    localStorage.setItem(KEY, JSON.stringify(items))
    return true
  } catch {
    return false
  }
}

// Function for loading system from local storage when user revisits
export function loadSystem(): CartItem[] | undefined {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return undefined

    const items = JSON.parse(raw)
    if (!Array.isArray(items)) return undefined

    // Items user had saved that will be returned must be from available products
    const itemsAvailable = items.filter((item) => item?.productId && productsById.has(item.productId))

    return itemsAvailable
  } catch {
    return undefined
  }
}

// Function for checking if user has a saved system
export function hasSavedSystem(): boolean {
  try {
    return localStorage.getItem(KEY) !== null
  } catch {
    return false
  }
}