import './Button.css'
const Button = ({text="", className=""} ) => {
    return (
        <button className={"Button " + className}>{text}</button>
    )
};

export {Button};