interface AccordionTriggerProps {
    icon: string
    label: string
    stepNumber: number
    totalSteps: number
    selectedCount: number
    isOpen: boolean
    onToggle: () => void
}

export default function AccordionTrigger({ icon, label, stepNumber, totalSteps, selectedCount, isOpen, onToggle }: AccordionTriggerProps) {
    return (
        <>
            <div className="flex px-3.75 lg:pb-1.25">
                <span className="text-[10px] text-text-teriary">STEP {stepNumber} OF {totalSteps}</span>
            </div>

            <div className="flex justify-between items-center gap-3 border-t border-black px-3.75 py-5">
                <div className="flex gap-2 items-center">
                    <i className={`${icon} text-[20px] md:text-[30px] lg:text-[26px]`}></i>
                    <span className="font-bold text-[22px]">{label}</span>
                </div>

                <div className="flex items-center gap-2">
                    {selectedCount > 0 && (
                        <span className="text-[10px] lg:text-[12px] text-primary font-medium">{selectedCount} selected</span>
                    )}

                    <i
                        className={`icon-down text-[12px] cursor-pointer transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        onClick={onToggle}
                    ></i>
                </div>
            </div>
        </>
    )
}
