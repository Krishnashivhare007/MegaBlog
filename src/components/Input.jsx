import React,{ useId } from "react";

const input=React.forwardRef(function Input({
    label,
    type="text",
    className="",
    ...props
},ref) {
    const id = useId();
    return (  
        <div className={`flex flex-col ${className}`}>
            {label && <label htmlFor={id} className="mb-1 inline-block pl-1">{label}
                </label>}
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}//yhi ref forward ho rha hai jo parent component se aayega
            {...props}
            id={id}
            />
        </div>
    );
}
);

export default input;