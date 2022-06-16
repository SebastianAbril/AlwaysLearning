import './Button.css'
const Button = ({text="", className="", onClick  } ) => {
    return (
        <button onClick={onClick} className={"Button " + className}>{text}</button>
    )
};

export {Button};