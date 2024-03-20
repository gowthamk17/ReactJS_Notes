import { useEffect } from "react"

export default function UseEffect() {
    useEffect(
        () => {
            console.log('useEffect component mounted')
            return () => {console.log(('useEffect component unmounted'))}
        }
    )

    return (
        <>
            <h4>"useEffect"</h4>
            <div>see console</div>
            <div>-------------------------------</div>
        </>
    )
}