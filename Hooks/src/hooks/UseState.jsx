import { useState } from "react";

export default function UseState() {
    const [count, setCount] = useState(0);
    return (
    <div>
      <h4>"useState"</h4>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>click to update number</button>
      <div>-------------------------------</div>
    </div>
    );
}