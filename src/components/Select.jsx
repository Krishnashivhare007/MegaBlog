import { useId,forwardRef } from "react";
function Select({
        options,//options array of objects with label and value properties
        label,
        className="",
        ...props
},ref) {
    const id = useId();
    return ( 
        <div className="w-full">
            {label && <label htmlFor={id} className="mb-1 inline-block pl-1">{label}</label>}
            <select
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref}
            id={id}
            {...props}
            >
                {options?.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
            </div>
     );
}

export default forwardRef(Select);//2nd way to forward ref is to wrap the component with forwardRef while exporting it. 1st way in input component.