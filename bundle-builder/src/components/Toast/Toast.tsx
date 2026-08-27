interface ToastProps {
    message: string
}

export default function Toast({ message }: ToastProps) {
    return (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-primary text-white text-[18px] font-medium py-3 px-6 rounded-sm">
            {message}
        </div>
    )
}
