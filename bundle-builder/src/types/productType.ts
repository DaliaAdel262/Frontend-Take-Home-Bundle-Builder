export type ProductCategory = 'camera' | 'sensor' | 'accessory' | 'plan'

export type BillingPeriod = 'one-time' | 'monthly'

export interface ProductVariant {
    id: string
    name: string
    image: string
}

export interface Product {
    id: string
    category: ProductCategory
    title: string
    description?: string
    learnMoreUrl?: string
    image?: string
    icon?: string
    variants?: ProductVariant[]
    billingPeriod?: BillingPeriod
    price: number
    discountedPrice?: number
    discountBadge?: string
    isRequired?: boolean
    maxQuantity?: number
}
