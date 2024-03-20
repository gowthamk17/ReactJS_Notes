import { useCallback, useState } from "react";

export default function UseCallBack() {
    const [val, setVal] = useState(0)
    const add = useCallback((a, b) => {
        console.log('add')
        return a + b
    }, [])
    return (
    <div>
      <h4>"useCallBack"</h4>
      <button onClick={() => setVal(add(1,1))}>update val with 1+1 -&gt; {val}</button>
      <div>-------------------------------</div>
    </div>
    )
}