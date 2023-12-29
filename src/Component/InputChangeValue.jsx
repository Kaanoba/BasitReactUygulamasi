import {useState} from "react";


const InputChangeValue = () => {

    const [text, setText] = useState(null)
    const [data, setData] = useState([])

    const Target = (e) => {
        setText(e.target.value)
        // console.log(text)
    }

    const Click = () => {
        setData(prev => ([...prev, text]))

    }

    return (
        <div>

            <input type="text" onChange={ Target }/>
            <button onClick={ Click }>Ara</button>
            {
                data.map((a, b) => <p key={b}>
                    {a}
                </p>)
            }

        </div>
    )
}
export default InputChangeValue