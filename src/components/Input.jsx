const Input = ({type, value, placeholder,className})=>{

    return(
        <div className="inputClass">
            <input 
            type={type}
            value={value}
            placeholder={placeholder}
            className={className}
            />
        </div>
    )
}

export default Input;