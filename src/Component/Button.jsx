import {useState} from "react";

const Button = ({ name }) =>
{

    const [counter, setCounter] = useState(0)
    const Arttir = () => setCounter(counter + 1)
    const Azalt = () => {
        if (counter <= 0){
            return 0 // 0 dan sonrası yok boş dönsün dedik.
        } setCounter(counter - 1)

    }
    return (
        <div>
            <p>
                { counter }
            </p>
            <button onClick={ Arttir }> { name } </button>
            <button onClick={ Azalt }>Azalt</button>
        </div>
    )
}

export default Button