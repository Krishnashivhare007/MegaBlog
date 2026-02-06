
function Container({ children }) {
    return ( //parenthesis is used for multi line jsx hta bhi skte h
        <div className="w-full max-w-7xl mx-auto px-4">
        {children}
        </div>
     );
}

export default Container;