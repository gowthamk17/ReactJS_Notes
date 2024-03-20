import { useMemo } from "react"

export default function UseMemo({arr}) {
    const fileteredArr = useMemo(() => arr.filter(i => i % 2), arr)
    
    return (
        <>
            <h4>"useMemo"</h4>
            {fileteredArr.map(item => <div key={item}>{item}</div>)}
            <div>-------------------------------</div>
        </>
    )
}