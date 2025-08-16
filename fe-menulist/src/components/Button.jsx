
function Button({ children, onClick, buttonType, isActive, qty}) {

    if (buttonType === "primary") {
        return (
            <button 
            className={`m-2 w-23 font-bold py-1 px-2 rounded ${
                isActive
                    ? "bg-blue-700 text-white"
                    : "bg-blue-400 hover:bg-gray-300 text-black"
            }`}
            onClick={onClick}
            >
            {children}
            </button>
        )
    }

    if (buttonType === "secondary" && qty !== 0 ) {
        return (
        <button
            className={`m-1 w-10 h-8 font-bold py-1 px-2 rounded ${
                isActive
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-red-300 active:bg-red-400 text-black"
            }`}
            onClick={onClick}
        >
            {children}
        </button>
        )
    }

    if (buttonType === "secondary-1") {
        return (
        <button
            className={`m-1 w-10 h-8 font-bold py-1 px-2 rounded ${
                isActive
                    ? "bg-red-500 text-white"
                    : "bg-green-200 hover:bg-green-300 active:bg-green-400 text-black"
            }`}
            onClick={onClick}
        >
            {children}
        </button>
        )
    }
}

export default Button