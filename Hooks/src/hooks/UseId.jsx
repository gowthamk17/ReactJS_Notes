import { useId } from "react";

export default function UseId() {
    return (
        <>
            <h4>"useId"</h4>
            <div>value: {useId()}</div>
            <div>value: {useId()}</div>
            <div>value: {useId()}</div>
            <div>-------------------------------</div>
        </>
    )
}