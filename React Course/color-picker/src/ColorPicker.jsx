import { useState } from 'react'
import './ColorPicker.css'

function ColorPicker(){
    const [color, setColor] = useState("#FF21FF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(<>
        <div className="box" style={{backgroundColor: color}}>
            <h1>Pick a Color</h1>
            <h3>{color}</h3>
        </div>
        <input type="color" onChange={handleColorChange} />
    </>)
}

export default ColorPicker