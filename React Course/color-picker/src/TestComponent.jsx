import { useState } from "react"

function TestComponent(){
    const [array, setArray] = useState([]);
    const [item, setItem] = useState("");
    function addToArray(event) {
        setArray(prev => ([...prev, item]))
    }

    return(<>
    <div>
         {array.map((current, index) => (
          <p key={index}>{current}</p>
        ))}</div>
    <input type="text" value = {item} onChange={(e) => setItem(e.target.value)}/>
    <button onClick={addToArray}>Add</button>
    </>)
}

export default TestComponent