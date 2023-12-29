import Button from "./Component/Button.jsx";
import {useState} from "react";
import InputChangeValue from "./Component/InputChangeValue.jsx";

const App = () => {


    const counter = 0;

    return (
        <div>

            <h1>React Temelleri</h1>
            <Button name='Arttır+'/>
            <hr/>
            <InputChangeValue/>


        </div>
    )

}

export default App