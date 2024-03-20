import { forwardRef, useImperativeHandle, useRef } from "react"

export default function UseImperativeHandle() {
    const ref = useRef(null)
    return (
        <>
            <h4>"useImperativeHandle"</h4>
            <MyInput ref={ref} />
            <button onClick={() => ref.current.focus()}>FocusInput</button>
            <div>-------------------------------</div>
        </>
    )
}

const MyInput = forwardRef((props, ref) => {
    const inputRef = useRef(null)
    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus()
            }
        }
    }, [])
    return <input ref={inputRef} />
})