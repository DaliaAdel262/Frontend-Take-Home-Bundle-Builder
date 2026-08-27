import BuilderPanel from '../../components/BuilderPanel/BuilderPanel'
import Review from '../../components/Review/Review'

export default function BundleBuilderPage() {
    return (
        <div className="flex flex-col gap-0 lg:flex-row sm:gap-7.25 sm:py-12.25 container mx-auto lg:justify-center">
            {/* Header that appears in mobile */}
            <h1 className="sm:hidden text-secondary text-center font-bold px-5.25 pb-5 pt-7.75 text-[31.8px]">Let's get started!</h1>
            
            {/* Builder panel */}
            <BuilderPanel />

            {/* Review Panel */}
            <Review />
        </div>
    )
}
