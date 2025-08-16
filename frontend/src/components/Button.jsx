
function Button({ children, onClick }) {
    
    return (
        <button className="m-2 bg-blue-500 hover:bg-blue-700 
        text-white font-bold py-1 px-2 rounded"
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button