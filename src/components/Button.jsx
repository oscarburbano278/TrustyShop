
const Button = ({label, onClick})=>{

    return(
        <div className="buttonClass">
            <Button onClick={onclick}>
                {label}
            </Button>
            
        </div>
    )
}

export default Button;