import { useReducer } from "react"

function reducer(state, action) {
    if (action.type === 'increment') {
        return {
            value: state.value + 1
        }
    } else if (action.type === 'decrement') {
        return {
            value: state.value - 1
        }
    }
}

export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, { value: 0})

    return (
        <>
            <h4>"useReducer"</h4>
            <div>currnt val: {state.value}</div>
            <button onClick={() => dispatch({type: 'increment'})}>increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>decrement</button>
            <div>-------------------------------</div>
        </>
    )
}