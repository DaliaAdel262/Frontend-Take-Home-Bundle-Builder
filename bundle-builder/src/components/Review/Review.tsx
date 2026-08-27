import ReviewContent from './ReviewContent/ReviewContent'

export default function review() {
    return (
        <div className='bg-review-bg px-3.75 py-3.75 flex flex-col
        gap-1.25 w-full md:rounded-[10px] lg:w-99.75  h-fit'>
            {/* Review Header */}
            <h5 className="text-[10px] lg:text-[12px] text-text-teriary">REVIEW</h5>

            {/* Review Content */}
            <ReviewContent />

        </div>

    )
}
