import { useState } from 'react'
import Items from './Items'
import Toast from '../../Toast/Toast'
import satisfactionBadge from '../../../assets/images/badges/satisfaction-badge.png'
import '../../../assets/icons/review-icons/style.css'
import { useCartStore } from '../../../store/cartStore'
import { productsById } from '../../../data/productsData'
import { getCartSummary } from '../../../utils/cartUtils'

export default function ReviewContent() {
    const items = useCartStore((state) => state.items)
    const saveForLater = useCartStore((state) => state.saveForLater)
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saved' | 'failed'>('idle')
    const [showCheckoutToast, setShowCheckoutToast] = useState(false)

    // Function to handle save system
    const handleSaveForLater = () => {
        const succeeded = saveForLater()
        setSaveStatus(succeeded ? 'saved' : 'failed')
        setTimeout(() => setSaveStatus('idle'), 2000)
    }

    // Function to handle checkout
    const handleCheckout = () => {
        setShowCheckoutToast(true)
        setTimeout(() => setShowCheckoutToast(false), 3000)
    }

    const hardwareItems = items.filter((item) => productsById.get(item.productId)?.category !== 'plan')
    const { subtotal, total, totalSaved } = getCartSummary({ items })

    const planItem = items.find((item) => productsById.get(item.productId)?.category === 'plan')
    const planProduct = planItem ? productsById.get(planItem.productId) : undefined
    const planFinalPrice = planProduct ? planProduct.discountedPrice ?? planProduct.price : 0

    return (
        <div className="flex flex-col px-5 pt-5 pb-7.75 gap-2.5">
            {/* Header */}
            <div className="flex flex-col gap-1.25">
                <h2 className="font-semibold text-[22px]">Your security system</h2>
                <h3 className="font-medium text-[12px] lg:text-[14px] text-text-secondary-75">Review your personalized protection system designed to keep what matters most safe.</h3>
            </div>

            {/* Items Selected */}
            {
                hardwareItems.length != 0 && (
                    <Items items={hardwareItems} />
                )
            }

            {/* Plan Chosen */}
            {planProduct && (
                <div className="flex flex-col gap-2 pt-3.75 border-t border-border-light">
                    <h4 className="font-normal text-[12px] line-height-[16px] text-text-span">HOME MONITORING PLAN</h4>

                    <div className="flex justify-between">
                        <div className="flex gap-[3.85px] items-center">
                            <i className="icon-plan text-[20px]" />
                            <p className="text-[14px] text-black font-bold">{planProduct.title.split(' ')[0]} 
                                <span className="text-primary"> {planProduct.title.split(' ')[1]}</span></p>
                        </div>

                        <div className="flex flex-col">
                            {planProduct.discountedPrice !== undefined && (
                                <span className="font-medium text-[12px] text-old-price line-through">${planProduct.price.toFixed(2)}/mo</span>
                            )}
                            <span className="font-semibold text-[12px] text-primary">
                                {planFinalPrice === 0 ? 'FREE' : `$${planFinalPrice.toFixed(2)}/mo`}
                            </span>
                        </div>
                    </div>
                </div>
            )}

            {/* Shipping Cost */}
            <div className="flex flex-col gap-2 pt-3.75 border-t border-border-light">

                {/* Item List */}
                <div className="flex justify-between">
                    {/* Item name */}
                    <div className="flex items-center gap-3">
                        <i className="icon-shipping text-[41px]" />
                        <p className="text-[12px] text-text-teriary font-medium">Fast Shipping</p>
                    </div>
                    {/* Item price */}
                    <div className="flex flex-col items-end">
                        <span className="font-medium text-[12px] text-old-price line-through">$35.98</span>
                        <span className="font-semibold text-[12px] text-primary">FREE</span>
                    </div>
                </div>
            </div>

            {/* Total Price */}
            <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                        <img className="w-19.5 h-19.5" src={satisfactionBadge} alt="Wyze satisfaction badge" />

                        <div className="flex items-end flex-col gap-2 py-2.5">
                            <span className="bg-primary text-white text-[12px] font-medium py-1.25 px-2 rounded-[3px] w-auto">
                                as low as $19.19/mo
                            </span>

                            <div className="flex items-center gap-2">
                                {totalSaved > 0 && (
                                    <p className="text-[18px] text-old-price font-medium line-through">${subtotal.toFixed(2)}</p>
                                )}
                                <p className="text-primary font-bold text-[24px]">${total.toFixed(2)}</p>
                            </div>


                        </div>
                    </div>

                    {/* Checkout Button */}
                    <div className="flex flex-col pt-2.5 gap-1">
                        {totalSaved > 0 && (
                            <p className="text-text-green font-semibold text-[12px]">Congrats! You’re saving ${totalSaved.toFixed(2)} on your security bundle!</p>
                        )}
                        <button
                            type="button"
                            onClick={handleCheckout}
                            className="rounded-sm py-3.25 px-4 bg-primary text-white text-[17px] font-semibold cursor-pointer"
                        >
                            Checkout
                        </button>
                    </div>

                </div>

                {/* Save System Button */}
                <button
                    type="button"
                    onClick={handleSaveForLater}
                    className={`underline italic text-[12px] cursor-pointer ${saveStatus === 'failed' ? 'text-text-red' : 'text-text-teriary'}`}
                >
                    {saveStatus === 'saved' && 'Saved'}
                    {saveStatus === 'failed' && "Couldn't save your system,try again"}
                    {saveStatus === 'idle' && 'Save my system for later'}
                </button>
            </div>

            {showCheckoutToast && <Toast message="Order placed!" />}
        </div>
    )
}
