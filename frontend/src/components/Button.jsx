
function Button({ children, onClick, buttonType, isActive}) {

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

    if (buttonType === "secondary") {
        return (
        <button
            className={`m-2 w-12 h-10 font-bold py-1 px-2 rounded ${
                isActive
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 hover:bg-blue-300 active:bg-blue-400 text-black"
            }`}
            onClick={onClick}
        >
            {children}
        </button>
        )
    }
}

export default Button