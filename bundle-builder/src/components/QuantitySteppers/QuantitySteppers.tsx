type QuantityTogglesVariant = 'review' | 'builder'

interface QuantityTogglesProps {
    quantity?: number
    onIncrement?: () => void
    onDecrement?: () => void
    incrementDisabled?: boolean
    decrementDisabled?: boolean
    variant: QuantityTogglesVariant
}

// Function for getting different stylings based on parent component
function getButtonClasses(variant: QuantityTogglesVariant, disabled: boolean): string {
    if (variant === 'review') {
        return disabled ? 'bg-quantity-review-disabled-bg border border-border-light' : 'bg-white'
    }

    return disabled ? 'border border-quantity-builder-disabled-border' : 'bg-quantity-builder-enabled-bg'
}

export default function QuantityToggles({
    quantity = 1,
    onIncrement,
    onDecrement,
    incrementDisabled = false,
    decrementDisabled = false,
    variant,
}: QuantityTogglesProps) {
    return (
        <div className="flex py-1 gap-3 items-center">
            <div
                className={`flex items-center rounded-sm py-[5.2px] px-1.5 ${getButtonClasses(variant, decrementDisabled)} ${decrementDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={decrementDisabled ? undefined : onDecrement}
            >
                <i className="icon-minus text-[8px]" />
            </div>

            <span className="text-[14px] font-semibold">{quantity}</span>

            <div
                className={`flex items-center rounded-sm py-[5.2px] px-1.5 ${getButtonClasses(variant, incrementDisabled)} ${incrementDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={incrementDisabled ? undefined : onIncrement}
            >
                <i className="icon-add text-[8px]" />
            </div>
        </div>
    )
}
