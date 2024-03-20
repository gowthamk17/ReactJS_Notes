import { useRef } from "react";

export default function UseRef() {
    let ref = useRef(0)

    function handleClick() {
        ref.current = ref.current + 1
        alert(`current ref val: ${ref.current}`)
    }

    return (
        <>
            <h4>"useRef"</h4>
            <button onClick={handleClick}>click here to increase ref val</button>
            <div>same val inside component {ref.current}</div>
            <div>-------------------------------</div>
        </>
    )
}