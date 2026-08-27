import '../../assets/icons/chevron-icons/style.css'
import '../../assets/icons/accordion-icons/style.css'
import { useState } from 'react'
import AccordionTrigger from './Accordion/AccordionTrigger'
import AccordionContent from './Accordion/AccordionContent'
import { products } from '../../data/productsData'
import { type ProductCategory } from '../../types/productType'
import { useCartStore } from '../../store/cartStore'
import { getSelectedCount } from '../../utils/selectedItems'

const accordionItems = [
    { category: 'camera', label: 'Choose your cameras', icon: 'icon-1' },
    { category: 'plan', label: 'Choose your plan', icon: 'icon-2' },
    { category: 'sensor', label: 'Choose your sensors', icon: 'icon-3' },
    { category: 'accessory', label: 'Add extra protection', icon: 'icon-4' },
] satisfies { category: ProductCategory; label: string; icon: string }[]

export default function BuilderPanel() {
    const [selectedSteps, setSelectedSteps] = useState([1])
    const items = useCartStore((state) => state.items)

    // Function to change selected steps on click
    const toggleStep = (step: number) => {
        setSelectedSteps((steps) => (steps.includes(step) ? steps.filter((s) => s !== step) : [...steps, step]))
    }

    return (
        <div className="flex flex-col gap-1.25 w-full lg:w-3xl lg:gap-3.25">
            {accordionItems.map((item, index) => {
                const stepNumber = index + 1
                const isOpen = selectedSteps.includes(stepNumber)
                const nextItem = isOpen ? accordionItems[index + 1] : undefined

                return (
                    <div
                        key={item.label}
                        className={`${isOpen ? 'bg-review-bg rounded-[10px]' : 'border-b border-black'} pt-3.75`}
                    >
                        <AccordionTrigger
                            icon={item.icon}
                            label={item.label}
                            stepNumber={stepNumber}
                            totalSteps={accordionItems.length}
                            selectedCount={getSelectedCount(items, item.category)}
                            isOpen={isOpen}
                            onToggle={() => toggleStep(stepNumber)}
                        />

                        <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                            <div className="overflow-hidden">
                                <div className="px-3.75 pb-5">
                                    <AccordionContent category={item.category} products={products} />

                                    {nextItem && (
                                        <div className="flex justify-center pt-5">
                                            <button
                                                type="button"
                                                onClick={() => setSelectedSteps([stepNumber + 1])}
                                                className="bg-transparent border border-primary text-primary text-[18px] font-semibold rounded-[7px] py-1.25 px-6 cursor-pointer"
                                            >
                                                Next: {nextItem.label}
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
