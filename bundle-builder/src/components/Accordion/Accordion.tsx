
import '../../assets/icons/chevron-icons/style.css'
import '../../assets/icons/accordion-icons/style.css'
import ProductCard from './ProductCard/ProductCard'

const accordionItems = [
    { label: 'Choose your cameras', icon: 'icon-1' },
    { label: 'Choose your plan', icon: 'icon-2' },
    { label: 'Choose your sensors', icon: 'icon-3' },
    { label: 'Add extra protection', icon: 'icon-4' },
]

export default function Accordion() {
    return (
        <div className="flex flex-col gap-1.25 w-full lg:w-[768px]">
            {accordionItems.map((item, index) => (
                <div key={item.label}>
                    <div className="flex px-3.75">
                        <span className="text-[10px] text-text-teriary">STEP {index + 1} OF {accordionItems.length}</span>
                    </div>

                    <div className="flex justify-between items-center gap-3 border-y border-black px-3.75 py-5">
                        <div className="flex gap-[8px] items-center">
                            <i className={item.icon}></i>
                            <span>{item.label}</span>
                        </div>

                        <i className="icon-down text-[12px]"></i>
                    </div>
                </div>
            ))}
        </div>
    )
}
