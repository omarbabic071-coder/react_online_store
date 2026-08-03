function Header(){
    return(
        <nav className="w-full mt-o p-2 fixed flex justify-evenly items-center bg-gray-300">
            <p>React Store</p>
            <input type="text" />
            <button>Search</button>
            <p>Products: 3</p>
        
        </nav>
    )
}

export default Header