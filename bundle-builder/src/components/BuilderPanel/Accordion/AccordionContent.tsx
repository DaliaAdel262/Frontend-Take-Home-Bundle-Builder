import ProductCard from './ProductCard/ProductCard'
import type { Product, ProductCategory } from '../../../types/productType'

interface AccordionContentProps {
    products: Product[]
    category: ProductCategory
}

export default function AccordionContent({ category, products }: AccordionContentProps) {
    return (
        <div className="flex flex-wrap justify-center gap-2 lg:gap-3.75">
            {products
                .filter((product) => product.category === category)
                .map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
        </div>
    )
}
